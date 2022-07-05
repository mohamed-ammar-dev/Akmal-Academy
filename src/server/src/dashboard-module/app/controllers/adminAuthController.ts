import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { IAuthAdminCoreService } from "../../interfaces/IAuthAdminCoreService";

export class AuthAdminController {
  async register(request: Request, response: Response) {
    const adminAuthCoreService = diContainer.get<IAuthAdminCoreService>(
      DI_TYPES.AuthAdminCoreService
    );

    const admin = await adminAuthCoreService.register(request.body);

    response.cookie("token", admin.token, {
      signed: true,
      maxAge: 86400000,
      httpOnly: true,
    });

    response.cookie("name", admin.name, { maxAge: 86400000 });

    sendResponse(response);
  }

  async login(request: Request, response: Response) {
    const adminAuthCoreService = diContainer.get<IAuthAdminCoreService>(
      DI_TYPES.AuthAdminCoreService
    );

    const admin = await adminAuthCoreService.login(request.body);

    response.cookie("token", admin.token, {
      signed: true,
      maxAge: 86400000,
      httpOnly: true,
    });

    response.cookie("name", admin.name, { maxAge: 86400000 });

    sendResponse(response);
  }
}
