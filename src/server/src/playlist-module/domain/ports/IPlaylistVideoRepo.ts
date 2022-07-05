import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

type PlaylistVideoModel = Promise<{
  videoId: number;
  playlistId: number;
}>;

export interface IPlaylistVideoRepo extends IBaseRepo {
  getMyVideos(userId: number): PlaylistVideoModel;
}
