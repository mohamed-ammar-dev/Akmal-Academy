export interface IUserInfoCoreService {
  searchEmails(email: string): Promise<{ email: string }>;
}
