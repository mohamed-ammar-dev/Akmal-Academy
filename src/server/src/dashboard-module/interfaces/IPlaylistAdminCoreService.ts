export interface IPlaylistAdminCoreService {
  getAll(): any;
  create(params: any): any;
  update(params: any): any;
  delete(id: number): any;
  getPlaylistVideos(params: { playlistId: number }): any;
  addVideoToPlaylist(params: { playlistId: number; videoId: number }): any;
  removeVideoFromPlaylist(params: { playlistId: number; videoId: number }): any;
}
