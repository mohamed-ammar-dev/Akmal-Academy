import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

type UserPlaylistModel = Promise<{
  userId: number;
  playlistId: number;
  expireAt: Date;
}>;

export interface IUserPlaylistRepo extends IBaseRepo {
  getMyPlaylists(userId: number): UserPlaylistModel;
  getMyPlaylist(userId: number, playlistId: number): UserPlaylistModel;
  getPlaylistUsers(
    playlistId: number
  ): UserPlaylistModel & Promise<{ user: { email: string } }>;
}
