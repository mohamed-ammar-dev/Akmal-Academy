import { DI_TYPES } from "../../../shared/types/di";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IAdminRepo } from "../ports/IAdminRepo";
import authAdminHelper from "../helpers/authAdminHelper";
import { ROLE_TYPE } from "../../../shared/enums/roleTypes";
import { IAuthAdminCoreService } from "../../interfaces/IAuthAdminCoreService";

@injectable()
export class AuthAdminCoreService implements IAuthAdminCoreService {
  constructor(
    @inject(DI_TYPES.AdminRepo)
    private adminRepo: IAdminRepo
  ) {}

  async login(params: any) {
    const email = params.email;
    const password = params.password;

    const admin = await this.adminRepo.findByEmail(email);

    authAdminHelper.validateCredential(admin);

    const isMatch = await authAdminHelper.comparePassword({
      password,
      hashedPassword: admin.password,
    });

    authAdminHelper.validateCredential(isMatch);

    const accessToken = authAdminHelper.generateAccessToken({
      id: admin.id,
      role: ROLE_TYPE.ADMIN,
    });

    return { name: admin.name, token: accessToken };
  }

  async register(params: any) {
    const email = params.email;

    const findAdmin = await this.adminRepo.isEmailExists(email);

    authAdminHelper.validateDuplicateRegister(findAdmin);

    const admin = await this.adminRepo.create(params);

    const accessToken = authAdminHelper.generateAccessToken({
      id: admin.id,
      role: ROLE_TYPE.ADMIN,
    });

    return { name: admin.name, token: accessToken };
  }
}
