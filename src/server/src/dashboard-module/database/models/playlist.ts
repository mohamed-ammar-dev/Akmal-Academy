import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";
import { PlaylistVideoModel } from "../../../playlist-module/database/models/playlistVideo";
import { UserPlaylistModel } from "../../../playlist-module/database/models/userPlaylist";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const PlaylistModel = sequelize.define(
  MODEL.PLAYLIST,
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,

    timestamps: false,

    indexes: [
      {
        fields: ["id"],
      },
    ],
  }
);

PlaylistModel.hasMany(UserPlaylistModel, {
  foreignKey: { name: "playlistId", allowNull: false },
  onDelete: "CASCADE",
});
UserPlaylistModel.belongsTo(PlaylistModel, {
  foreignKey: { name: "playlistId", allowNull: false },
});

PlaylistModel.hasMany(PlaylistVideoModel, {
  foreignKey: { name: "playlistId", allowNull: false },
  onDelete: "CASCADE",
});
PlaylistVideoModel.belongsTo(PlaylistModel, {
  foreignKey: { name: "playlistId", allowNull: false },
});

export { PlaylistModel };
