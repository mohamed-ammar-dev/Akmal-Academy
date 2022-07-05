import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import { PlaylistController } from "../controllers/playlistController";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { auth } from "../../../shared/middleware/authentication";
import { restrictTo } from "../../../shared/middleware/authorization";
import { ROLE_TYPE } from "../../../shared/enums/roleTypes";
import { playlistSchema } from "../schemas/playlistSchema";

const playlistRouter = express.Router();

playlistRouter.get(
  "/me",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.USER])),
  catchAsync(new PlaylistController().getMyPlaylists)
);

playlistRouter.get(
  "/myVideos",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.USER])),
  joiCatchAsync(validate(playlistSchema)),
  catchAsync(new PlaylistController().getMyPlaylistVideos)
);

export { playlistRouter };
