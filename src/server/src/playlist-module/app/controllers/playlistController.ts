import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { IPlaylistCoreService } from "../../interfaces/IPlaylistCoreService";

export class PlaylistController {
  async getMyPlaylists(request: Request, response: Response) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );

    const playlists = await playlistCoreService.getMyPlaylists(request.user.id);

    sendResponse(response, playlists);
  }

  async getMyPlaylistVideos(request: Request, response: Response) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );

    const videos = await playlistCoreService.getMyPlaylistVideos({
      userId: request.user.id,
      playlistId: request.body.playlistId,
    });

    sendResponse(response, videos);
  }
}
