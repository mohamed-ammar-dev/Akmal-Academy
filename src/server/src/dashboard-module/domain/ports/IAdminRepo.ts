import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

export interface IAdminRepo extends IBaseRepo {
  findByEmail(
    email: string
  ): Promise<{ id: number; email: string; password: string; name: string }>;
  isEmailExists(email: string): Promise<{ id: number }>;
}
