import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { VideoModel } from "../../../database/models/video";
import { IVideoRepo } from "../../../domain/ports/IVideoRepo";

@injectable()
export class VideoRepo extends BaseRepo implements IVideoRepo {
  constructor() {
    super(VideoModel);
  }

  async getAll() {
    return await this.find({});
  }
}
