export interface IPlaylistCoreService {
  getMyPlaylists(userId: number): any;
  getMyPlaylistVideos(params: { playlistId: number; userId: number }): any;
  getPlaylistVideos(playlistId: number): any;
  getPlaylistUsers(playlistId: number): any;
  addVideoToPlaylist(params: { playlistId: number; videoId: number }): any;
  removeVideoFromPlaylist(params: { playlistId: number; videoId: number }): any;
  addUserToPlaylist(params: {
    playlistId: number;
    userId: number;
    expireAt: Date;
  }): any;
  removeUserFromPlaylist(params: { playlistId: number; userId: number }): any;
}
