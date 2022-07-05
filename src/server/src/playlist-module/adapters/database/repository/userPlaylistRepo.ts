import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { UserPlaylistModel } from "../../../database/models/userPlaylist";
import { PlaylistModel } from "../../../../dashboard-module/database/models/playlist";
import { IUserPlaylistRepo } from "../../../domain/ports/IUserPlaylistRepo";
import { Op } from "sequelize";
import { UserModel } from "../../../../user-management-module/database/models/user";

@injectable()
export class UserPlaylistRepo extends BaseRepo implements IUserPlaylistRepo {
  constructor() {
    super(UserPlaylistModel);
  }

  async getMyPlaylists(userId: number) {
    return await this.find({
      condition: {
        userId,
        expireAt: {
          [Op.gt]: new Date(),
        },
      },
      attributes: ["userId"],
      include: { model: PlaylistModel },
    });
  }

  async getMyPlaylist(userId: number, playlistId: number) {
    return await this.findOne({
      condition: { playlistId, userId },
    });
  }

  async getPlaylistUsers(playlistId: number) {
    return await this.findOne({
      condition: { playlistId },
      include: { model: UserModel, attributes: ["email"] },
    });
  }
}
