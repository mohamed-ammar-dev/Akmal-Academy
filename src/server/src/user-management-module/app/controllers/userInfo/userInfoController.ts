import { Request, Response } from "express";
import { diContainer } from "../../../../config/inversify.config";
import { DI_TYPES } from "../../../../shared/types/di";
import { sendResponse } from "../../../../shared/utils/sendResponse";
import { IUserInfoCoreService } from "../../../interfaces/IUserInfoCoreService";

export class UserInfoController {
  async searchEmails(request: Request, response: Response) {
    const userInfoCoreService = diContainer.get<IUserInfoCoreService>(
      DI_TYPES.UserInfoCoreService
    );

    const emails = await userInfoCoreService.searchEmails(request.body);

    sendResponse(response, emails);
  }
}
