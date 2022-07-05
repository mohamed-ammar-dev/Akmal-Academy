import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const UserPlaylistModel = sequelize.define(
  MODEL.USER_PLAYLIST,
  {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    expireAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,

    timestamps: false,

    indexes: [
      {
        unique: true,
        fields: ["userId", "playlistId"],
      },
      {
        fields: ["userId", "expireAt"],
      },
    ],
  }
);

export { UserPlaylistModel };
