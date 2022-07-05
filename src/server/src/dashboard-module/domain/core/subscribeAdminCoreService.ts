import { DI_TYPES } from "../../../shared/types/di";
import { diContainer } from "../../../config/inversify.config";
import { IPlaylistCoreService } from "../../../playlist-module/interfaces/IPlaylistCoreService";
import { ISubscribeAdminCoreService } from "../../interfaces/ISubscribeAdminCoreService";

export class SubscribeAdminCoreService implements ISubscribeAdminCoreService {
  constructor() {}

  async getPlaylistUsers(params: any) {
    const playlistId = params.playlistId;

    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.getPlaylistUsers(playlistId);
  }

  async addUserToPlaylist(params: any) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.addUserToPlaylist(params);
  }

  async removeUserFromPlaylist(params: any) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.addUserToPlaylist(params);
  }
}
