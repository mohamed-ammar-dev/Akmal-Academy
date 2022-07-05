import { DI_TYPES } from "../../../shared/types/di";
import { IPlaylistCoreService } from "../../interfaces/IPlaylistCoreService";
import playlistHelper from "../helpers/playlistHelper";
import { IPlaylistVideoRepo } from "../ports/IPlaylistVideoRepo";
import { IUserPlaylistRepo } from "../ports/IUserPlaylistRepo";
import "reflect-metadata";
import { inject, injectable } from "inversify";

@injectable()
export class PlaylistCoreService implements IPlaylistCoreService {
  constructor(
    @inject(DI_TYPES.PlaylistVideoRepo)
    private playlistVideoRepo: IPlaylistVideoRepo,
    @inject(DI_TYPES.UserPlaylistRepo)
    private userPlaylistRepo: IUserPlaylistRepo
  ) {}

  async getMyPlaylists(userId: number) {
    return await this.userPlaylistRepo.getMyPlaylists(userId);
  }

  async getMyPlaylistVideos(params: any) {
    const userId = params.userId;
    const playlistId = params.playlistId;

    const playlist = await this.userPlaylistRepo.getMyPlaylist!(
      userId,
      playlistId
    );

    playlistHelper.validateSubscribePlaylist(playlist);

    return await this.playlistVideoRepo.getMyVideos!(playlistId);
  }

  async getPlaylistVideos(playlistId: number) {
    return await this.playlistVideoRepo.getMyVideos(playlistId);
  }

  async getPlaylistUsers(playlistId: number) {
    return await this.playlistVideoRepo.getMyVideos(playlistId);
  }

  async addVideoToPlaylist(params: any) {
    return await this.playlistVideoRepo.create(params);
  }

  async removeVideoFromPlaylist(params: any) {
    const playlistId = params.playlistId;
    const videoId = params.videoId;

    return await this.playlistVideoRepo.delete({
      condition: { videoId, playlistId },
    });
  }

  async addUserToPlaylist(params: any) {
    return await this.userPlaylistRepo.create(params);
  }

  async removeUserFromPlaylist(params: any) {
    const playlistId = params.playlistId;
    const userId = params.userId;

    return await this.userPlaylistRepo.delete({
      condition: { userId, playlistId },
    });
  }
}
