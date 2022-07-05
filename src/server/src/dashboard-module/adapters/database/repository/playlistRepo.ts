import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { PlaylistModel } from "../../../database/models/playlist";
import { IPlaylistRepo } from "../../../domain/ports/IPlaylistRepo";

@injectable()
export class PlaylistRepo extends BaseRepo implements IPlaylistRepo {
  constructor() {
    super(PlaylistModel);
  }

  async getAll() {
    return await this.find({});
  }
}
