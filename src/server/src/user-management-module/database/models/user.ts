import { Model, Sequelize, DataTypes } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";
import { ForgetPasswordModel } from "./forgetPassword";
import { UserPlaylistModel } from "../../../playlist-module/database/models/userPlaylist";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const UserModel = sequelize.define<Model>(
  MODEL.USER,
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    loginCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    loginCounter: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },

    token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,

    timestamps: false,

    indexes: [
      {
        fields: ["id"],
      },
      {
        fields: ["email"],
      },
    ],
  }
);

UserModel.hasOne(ForgetPasswordModel, {
  foreignKey: { name: "userId", allowNull: false },
  onDelete: "CASCADE",
});
ForgetPasswordModel.belongsTo(UserModel, {
  foreignKey: { name: "userId", allowNull: false },
});

UserModel.hasMany(UserPlaylistModel, {
  foreignKey: { name: "userId", allowNull: false },
  onDelete: "CASCADE",
});
UserPlaylistModel.belongsTo(UserModel, {
  foreignKey: { name: "userId", allowNull: false },
});

export { UserModel };

import "../triggers/user";
