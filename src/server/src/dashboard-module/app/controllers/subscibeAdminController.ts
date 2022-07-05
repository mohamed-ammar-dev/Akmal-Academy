import { Request, Response } from "express";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { SubscribeAdminCoreService } from "../../domain/core/subscribeAdminCoreService";

export class SubscribeAdminController {
  async getPlaylistUsers(request: Request, response: Response) {
    const subscribeAdminCoreService = new SubscribeAdminCoreService();

    const users = await subscribeAdminCoreService.getPlaylistUsers(
      request.body
    );

    sendResponse(response, users);
  }

  async addUserToPlaylist(request: Request, response: Response) {
    const subscribeAdminCoreService = new SubscribeAdminCoreService();

    await subscribeAdminCoreService.addUserToPlaylist(request.body);

    sendResponse(response);
  }

  async removeUserFromPlaylist(request: Request, response: Response) {
    const subscribeAdminCoreService = new SubscribeAdminCoreService();

    await subscribeAdminCoreService.removeUserFromPlaylist(request.body);

    sendResponse(response);
  }
}
