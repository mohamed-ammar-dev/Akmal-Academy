import { inject, injectable } from "inversify";
import { IUserRepo } from "../../ports/user/IUserRepo";
import authHelper from "../helpers/authHelper";
import "reflect-metadata";
import { DI_TYPES } from "../../../../shared/types/di";
import { ROLE_TYPE } from "../../../../shared/enums/roleTypes";
import { MAIL_TEMPLATE } from "../../../../shared/enums/mailTemplates";
import { INotifier } from "../../../../shared/interfaces/INotifier";
import { IForgetPasswordRepo } from "../../ports/auth/IForgetPasswordRepo";
import { IUserAuthCoreService } from "../../../interfaces/IUserAuthCoreService";
@injectable()
export class UserAuthCoreService implements IUserAuthCoreService {
  constructor(
    @inject(DI_TYPES.UserRepo) private userRepo: IUserRepo,
    @inject(DI_TYPES.MailService) private mailService: INotifier,
    @inject(DI_TYPES.ForgetPasswordRepo)
    private forgetPasswordRepo: IForgetPasswordRepo
  ) {}

  async login(params: any) {
    const email = params.email;
    const password = params.password;

    const user = await this.userRepo.findByEmailForLogin(email);

    authHelper.validateCredential(user);

    const isMatch = await authHelper.comparePassword({
      password,
      hashedPassword: user.password,
    });

    authHelper.validateCredential(isMatch);

    // authHelper.validateMaxLogin(user.loginCounter);

    const userId = user.id;

    const code = authHelper.generateCode();

    const token = authHelper.generateTwoFactorToken(userId);

    await this.userRepo.update!({
      condition: { id: userId },
      update: { counter: user.loginCounter++, loginCode: code },
    });

    this.mailService.send({
      receiver: user.email,
      templateType: MAIL_TEMPLATE.TWO_FACTOR_LOGIN,
      replace: { code, name: user.name },
    });

    user.token = token;

    return user;
  }

  async register(params: any) {
    const email = params.email;

    const findUser = await this.userRepo.isEmailExists(email);

    authHelper.validateDuplicateRegister(findUser);

    const code = authHelper.generateCode();

    const user = await this.userRepo.create({ ...params, loginCode: code });

    const token = authHelper.generateTwoFactorToken(user.id!);

    this.mailService.send({
      receiver: user.email,
      templateType: MAIL_TEMPLATE.TWO_FACTOR_LOGIN,
      replace: { code, name: user.name },
    });

    return { name: user.name, token };
  }

  async twoFactorLogin(params: any) {
    const token = params.token;
    const inputCode = params.code;

    authHelper.validateTwoFactorToken(token);

    const userTokenInfo: any = authHelper.verifyTwoFactorToken(token);

    const user = await this.userRepo.findLoginCode(userTokenInfo.id);

    authHelper.validateTwoFactorCode(user?.loginCode, inputCode);

    const accessToken = authHelper.generateAccessToken({
      id: user.id,
      role: ROLE_TYPE.USER,
    });

    await this.userRepo.update!({
      condition: { id: user.id! },
      update: { token: accessToken },
    });

    return accessToken;
  }

  async sendForgetPasswordCode(params: any) {
    const email = params.email;
    const code = authHelper.generateCode();
    const expireAt = new Date().getTime() + 10 * 60 * 1000;

    const user = await this.userRepo.isEmailExists(email);

    authHelper.validateUser(user);

    let forgetPasswordRecord = await this.forgetPasswordRepo.findByUserId(
      user.id
    );

    let counter = 1;
    if (forgetPasswordRecord) counter = forgetPasswordRecord.counter + 1;

    forgetPasswordRecord = await this.forgetPasswordRepo.upsert!({
      update: {
        userId: user.id,
        counter,
        code,
        expireAt,
        identifier: email,
      },
    });

    authHelper.validateMaxForgetPassword(forgetPasswordRecord.counter);

    this.mailService.send({
      receiver: user.email,
      templateType: MAIL_TEMPLATE.FORGET_PASSWORD,
      replace: { code },
    });
  }

  async validateForgetPasswordCode(params: any) {
    const code = params.code;
    const email = params.email;

    const forgetPasswordCodeRecord = await this.forgetPasswordRepo.findByEmail(
      email
    );

    authHelper.validateForgetPasswordCode(forgetPasswordCodeRecord, code);
  }

  async resetPassword(params: any) {
    const password = params.newPassword;
    const email = params.email;
    const code = params.code;

    const user = await this.userRepo.isEmailExists(email);

    authHelper.validateUser(user);

    const forgetPasswordCodeRecord = await this.forgetPasswordRepo.findByEmail!(
      email
    );

    authHelper.validateForgetPasswordCode(forgetPasswordCodeRecord, code);

    await this.userRepo.update!({
      condition: { id: user.id },
      update: { password },
    });
  }

  async getMyToken(userId: number) {
    return await this.userRepo.getMyToken(userId);
  }

  async resetCounters() {
    await this.userRepo.resetLoginCounter();
    await this.forgetPasswordRepo.resetCounter();
  }
}
