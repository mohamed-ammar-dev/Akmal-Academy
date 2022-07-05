import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { AdminModel } from "../../../database/models/admin";
import { IAdminRepo } from "../../../domain/ports/IAdminRepo";

@injectable()
export class AdminRepo extends BaseRepo implements IAdminRepo {
  constructor() {
    super(AdminModel);
  }

  async findByEmail(email: string) {
    return await this.findOne({ condition: { email } });
  }

  async isEmailExists(email: string) {
    return await this.findOne!({
      condition: { email },
      attributes: ["id", "email"],
    });
  }
}
