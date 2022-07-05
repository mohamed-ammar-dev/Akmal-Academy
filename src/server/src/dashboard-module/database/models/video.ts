import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { PlaylistVideoModel } from "../../../playlist-module/database/models/playlistVideo";
import { MODEL } from "../../enums/models";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const VideoModel = sequelize.define(
  MODEL.VIDEO,
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    reference: {
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

VideoModel.hasMany(PlaylistVideoModel, {
  foreignKey: { name: "videoId", allowNull: false },
  onDelete: "CASCADE",
});
PlaylistVideoModel.belongsTo(VideoModel, {
  foreignKey: { name: "videoId", allowNull: false },
});

export { VideoModel };
