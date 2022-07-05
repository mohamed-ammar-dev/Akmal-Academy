import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const PlaylistVideoModel = sequelize.define(
  MODEL.PLAYLIST_VIDEO,
  {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,

    timestamps: false,

    indexes: [
      {
        unique: true,
        fields: ["playlistId", "videoId"],
      },
    ],
  }
);

export { PlaylistVideoModel };
