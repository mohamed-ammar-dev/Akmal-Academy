import { NextFunction, Request, Response } from "express";
import authHelper from "../../user-management-module/domain/core/helpers/authHelper";
import { diContainer } from "../../config/inversify.config";
import { IUserAuthCoreService } from "../../user-management-module/interfaces/IUserAuthCoreService";
import { DI_TYPES } from "../types/di";

export const auth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.signedCookies.token || request.headers.authorization;

  token = token?.replace(/(B|b)earer /, "");

  if (!token) return logout(response);

  const user: any = authHelper.verifyAccessToken(token);

  if (!user) return logout(response);

  const userAuthCoreService = diContainer.get<IUserAuthCoreService>(
    DI_TYPES.UserAuthCoreService
  );

  const savedToken = await userAuthCoreService.getMyToken(user.id);

  if (savedToken.token != token) return logout(response);

  request.user = user;

  next();
};

const logout = (response: Response) => {
  response.clearCookie("user");
  response.clearCookie("token");
  response.clearCookie("isAuth");

  response.render("index.ejs");
};
