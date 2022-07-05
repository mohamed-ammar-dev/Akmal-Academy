import { inject, injectable } from "inversify";
import { IUserRepo } from "../../ports/user/IUserRepo";
import "reflect-metadata";
import { DI_TYPES } from "../../../../shared/types/di";
import { IUserInfoCoreService } from "../../../interfaces/IUserInfoCoreService";

@injectable()
export class UserInfoCoreService implements IUserInfoCoreService {
  constructor(@inject(DI_TYPES.UserRepo) private userRepo: IUserRepo) {}

  async searchEmails(email: string) {
    return await this.userRepo.searchEmails(email);
  }
}
