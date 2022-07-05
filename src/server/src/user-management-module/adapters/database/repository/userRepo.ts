import { injectable } from "inversify";
import { Op } from "sequelize";
import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { UserModel } from "../../../database/models/user";
import { IUserRepo } from "../../../domain/ports/user/IUserRepo";

@injectable()
export class UserRepo extends BaseRepo implements IUserRepo {
  constructor() {
    super(UserModel);
  }

  async findByEmailForLogin(email: string) {
    return await this.findOne!({
      condition: { email: email.toLowerCase() },
      attributes: ["id", "name", "email", "password", "loginCounter"],
    });
  }

  async isUserExists(userId: number) {
    return await this.findOne!({
      condition: { id: userId },
      attributes: ["id"],
    });
  }

  async isEmailExists(email: string) {
    return await this.findOne!({
      condition: { email },
      attributes: ["id", "email"],
    });
  }

  async findLoginCode(userId: number) {
    return await this.findOne!({
      condition: { id: userId },
      attributes: ["id", "loginCode"],
    });
  }

  async resetLoginCounter() {
    await this.update({
      condition: {
        loginCounter: {
          [Op.ne]: 0,
        },
      },
      update: {
        loginCounter: 0,
      },
    });
  }

  async searchEmails(email: string) {
    return await this.find!({
      condition: {
        email: {
          [Op.like]: `%${email}`,
        },
      },
      attributes: ["id", "email"],
    });
  }
}
