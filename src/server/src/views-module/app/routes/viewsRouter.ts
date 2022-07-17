import express from "express";
import catchAsync from "../../../error-module/utils/catchAsync";
import { auth } from "../../../shared/middleware/authentication";
import { restrictTo } from "../../../shared/middleware/authorization";
import { ViewsController } from "../controllers/viewsController";
import { ROLE_TYPE } from "../../../shared/enums/roleTypes";

const viewsRouter = express.Router();

viewsRouter.get("/", catchAsync(new ViewsController().renderHome));
viewsRouter.get(
  "/login",
  catchAsync(new ViewsController().renderAuthentication)
);
viewsRouter.get(
  "/twoFactorLogin",
  catchAsync(new ViewsController().renderTwoFactorLogin)
);
viewsRouter.get("/logout", catchAsync(new ViewsController().logout));
viewsRouter.get(
  "/forgetPassword",
  catchAsync(new ViewsController().renderForgetPassword)
);
viewsRouter.get(
  "/forgetPassword/code",
  catchAsync(new ViewsController().renderForgetPasswordCode)
);
viewsRouter.get(
  "/forgetPassword/reset",
  catchAsync(new ViewsController().renderResetPassword)
);
viewsRouter.get(
  "/playlists/me",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.USER])),
  catchAsync(new ViewsController().renderMyPlaylists)
);
viewsRouter.get(
  "/playlist/:id",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.USER])),
  catchAsync(new ViewsController().renderMyPlaylistVideos)
);

viewsRouter.get(
  "/services/IFRS",
  catchAsync(new ViewsController().renderServiceIFRS)
);
viewsRouter.get(
  "/services/CMA",
  catchAsync(new ViewsController().renderServiceCMA)
);
viewsRouter.get(
  "/services/ACCA",
  catchAsync(new ViewsController().renderServiceACCA)
);

viewsRouter.get("/services", catchAsync(new ViewsController().renderServices));

viewsRouter.get("/aboutUs", catchAsync(new ViewsController().renderAboutUs));
viewsRouter.get("/policy", catchAsync(new ViewsController().renderPolicy));
viewsRouter.get("/terms", catchAsync(new ViewsController().renderTerms));

export { viewsRouter };
