import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { auth } from "../../../shared/middleware/authentication";
import { restrictTo } from "../../../shared/middleware/authorization";
import { ROLE_TYPE } from "../../../shared/enums/roleTypes";
import { PlaylistAdminController } from "../controllers/playlistAdminController";
import { createPlaylistSchema } from "../schemas/playlist/createPlaylistSchema";
import { updatePlaylistSchema } from "../schemas/playlist/updatePlaylistSchema";
import { deletePlaylistSchema } from "../schemas/playlist/deletePlaylistSchema";
import { addVideoToPlaylistSchema } from "../schemas/playlist/addVideoToPlaylistSchema";
import { removeVideoFromPlaylistSchema } from "../schemas/playlist/removeVideoFromPlaylistSchema";
import { getPlaylistVideosSchema } from "../schemas/playlist/getPlaylistVideosSchema";

const playlistAdminRouter = express.Router();

playlistAdminRouter.get(
  "/getAll",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  catchAsync(new PlaylistAdminController().getAll)
);

playlistAdminRouter.post(
  "/create",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(createPlaylistSchema)),
  catchAsync(new PlaylistAdminController().create)
);

playlistAdminRouter.put(
  "/update",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(updatePlaylistSchema)),
  catchAsync(new PlaylistAdminController().update)
);

playlistAdminRouter.delete(
  "/delete",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(deletePlaylistSchema)),
  catchAsync(new PlaylistAdminController().delete)
);

playlistAdminRouter.get(
  "/getPlaylistVideos",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(getPlaylistVideosSchema)),
  catchAsync(new PlaylistAdminController().getPlaylistVideos)
);

playlistAdminRouter.post(
  "/addVideoToPlaylist",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(addVideoToPlaylistSchema)),
  catchAsync(new PlaylistAdminController().addVideoToPlaylist)
);

playlistAdminRouter.delete(
  "/removeVideoFromPlaylist",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(removeVideoFromPlaylistSchema)),
  catchAsync(new PlaylistAdminController().removeVideoFromPlaylist)
);

export { playlistAdminRouter };
