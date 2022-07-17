import { IBaseRepo } from "../../../../shared/interfaces/IBaseRepo";

type findByEmailForLoginReturn = Promise<{
  id: number;
  email: string;
  name: string;
  password: string;
  loginCounter: number;
  token?: string;
}>;

export interface IUserRepo extends IBaseRepo {
  isEmailExists(email: string): Promise<{ email: string; id: number }>;
  isUserExists(userId: number): Promise<{ id: number }>;
  getMyToken(userId: number): Promise<{ token: string }>;
  findByEmailForLogin(email: string): findByEmailForLoginReturn;
  findLoginCode(userId: number): Promise<{ id: number; loginCode: number }>;
  resetLoginCounter(): Promise<void>;
  searchEmails(email: string): Promise<{ email: string; id: number }>;
}
