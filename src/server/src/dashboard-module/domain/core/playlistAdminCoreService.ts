import { DI_TYPES } from "../../../shared/types/di";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IPlaylistRepo } from "../ports/IPlaylistRepo";
import { IPlaylistAdminCoreService } from "../../interfaces/IPlaylistAdminCoreService";
import { diContainer } from "../../../config/inversify.config";
import { IPlaylistCoreService } from "../../../playlist-module/interfaces/IPlaylistCoreService";

@injectable()
export class PlaylistAdminCoreService implements IPlaylistAdminCoreService {
  constructor(
    @inject(DI_TYPES.PlaylistRepo)
    private playlistRepo: IPlaylistRepo
  ) {}

  async getAll() {
    return await this.playlistRepo.getAll();
  }

  async create(params: any) {
    return await this.playlistRepo.create(params);
  }

  async update(params: any) {
    const id = params.id;

    return await this.playlistRepo.update!({
      condition: { id },
      update: {
        title: params.title,
        description: params.description,
      },
    });
  }

  async delete(params: any) {
    const id = params.id;

    return await this.playlistRepo.delete!({ condition: { id } });
  }

  async getPlaylistVideos(params: any) {
    const playlistId = params.playlistId;

    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.getPlaylistVideos(playlistId);
  }

  async addVideoToPlaylist(params: any) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.addVideoToPlaylist(params);
  }

  async removeVideoFromPlaylist(params: any) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );
    return await playlistCoreService.removeVideoFromPlaylist(params);
  }
}
