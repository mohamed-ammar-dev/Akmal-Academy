import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

export interface IVideoRepo extends IBaseRepo {
  getAll(): any;
}
