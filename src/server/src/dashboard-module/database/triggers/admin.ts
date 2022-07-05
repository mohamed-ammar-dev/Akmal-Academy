import authAdminHelper from "../../domain/helpers/authAdminHelper";
import { AdminModel } from "../models/admin";

AdminModel.beforeCreate(async (user: any) => {
  user.password = await authAdminHelper.hashPassword(user.password);

  user.email = user.email.toLowerCase();
});
