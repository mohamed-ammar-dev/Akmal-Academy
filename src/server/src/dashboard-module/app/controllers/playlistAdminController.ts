import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { IPlaylistAdminCoreService } from "../../interfaces/IPlaylistAdminCoreService";

export class PlaylistAdminController {
  async getAll(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    const playlists = await playlistAdminCoreService.getAll();

    sendResponse(response, playlists);
  }

  async create(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    const playlist = await playlistAdminCoreService.create(request.body);

    sendResponse(response, playlist);
  }

  async update(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    await playlistAdminCoreService.update(request.body);

    sendResponse(response);
  }

  async delete(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    await playlistAdminCoreService.delete(request.body);

    sendResponse(response);
  }

  async getPlaylistVideos(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    const playlistVideos = await playlistAdminCoreService.getPlaylistVideos(
      request.body
    );

    sendResponse(response, playlistVideos);
  }

  async addVideoToPlaylist(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    await playlistAdminCoreService.addVideoToPlaylist(request.body);

    sendResponse(response);
  }

  async removeVideoFromPlaylist(request: Request, response: Response) {
    const playlistAdminCoreService = diContainer.get<IPlaylistAdminCoreService>(
      DI_TYPES.PlaylistAdminCoreService
    );

    await playlistAdminCoreService.removeVideoFromPlaylist(request.body);

    sendResponse(response);
  }
}
