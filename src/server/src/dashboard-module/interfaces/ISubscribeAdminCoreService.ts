export interface ISubscribeAdminCoreService {
  getPlaylistUsers(params: { playlistId: number }): any;
  addUserToPlaylist(params: { playlistId: number; videoId: number }): any;
  removeUserFromPlaylist(params: { playlistId: number; videoId: number }): any;
}
