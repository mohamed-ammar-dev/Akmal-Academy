import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { IVideoAdminCoreService } from "../../interfaces/IVideoAdminCoreService";

export class VideoAdminController {
  async getAll(request: Request, response: Response) {
    const videoAdminCoreService = diContainer.get<IVideoAdminCoreService>(
      DI_TYPES.VideoAdminCoreService
    );

    const videos = await videoAdminCoreService.getAll();

    sendResponse(response, videos);
  }

  async create(request: Request, response: Response) {
    const videoAdminCoreService = diContainer.get<IVideoAdminCoreService>(
      DI_TYPES.VideoAdminCoreService
    );

    const video = await videoAdminCoreService.create(request.body);

    sendResponse(response, video);
  }

  async update(request: Request, response: Response) {
    const videoAdminCoreService = diContainer.get<IVideoAdminCoreService>(
      DI_TYPES.VideoAdminCoreService
    );

    await videoAdminCoreService.update(request.body);

    sendResponse(response);
  }

  async delete(request: Request, response: Response) {
    const videoAdminCoreService = diContainer.get<IVideoAdminCoreService>(
      DI_TYPES.VideoAdminCoreService
    );

    await videoAdminCoreService.delete(request.body);

    sendResponse(response);
  }
}
