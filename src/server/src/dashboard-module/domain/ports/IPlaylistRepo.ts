import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

export interface IPlaylistRepo extends IBaseRepo {
  getAll(): any;
}
