import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { PlaylistVideoModel } from "../../../database/models/playlistVideo";
import { IPlaylistVideoRepo } from "../../../domain/ports/IPlaylistVideoRepo";
import { VideoModel } from "../../../../dashboard-module/database/models/video";

@injectable()
export class PlaylistVideoRepo extends BaseRepo implements IPlaylistVideoRepo {
  constructor() {
    super(PlaylistVideoModel);
  }
  async getMyVideos(playlistId: number) {
    return await this.find!({
      condition: { playlistId },
      attributes: ["playlistId"],
      include: { model: VideoModel },
    });
  }
}
