import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { auth } from "../../../shared/middleware/authentication";
import { restrictTo } from "../../../shared/middleware/authorization";
import { ROLE_TYPE } from "../../../shared/enums/roleTypes";
import { VideoAdminController } from "../controllers/videoAdminController";
import { createVideoSchema } from "../schemas/video/createVideoSchema";
import { updateVideoSchema } from "../schemas/video/updateVideoSchema";
import { deleteVideoSchema } from "../schemas/video/deleteVideoSchema";

const videoAdminRouter = express.Router();

videoAdminRouter.get(
  "/getAll",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  catchAsync(new VideoAdminController().getAll)
);

videoAdminRouter.post(
  "/create",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(createVideoSchema)),
  catchAsync(new VideoAdminController().create)
);

videoAdminRouter.put(
  "/update",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(updateVideoSchema)),
  catchAsync(new VideoAdminController().update)
);

videoAdminRouter.delete(
  "/delete",
  catchAsync(auth),
  catchAsync(restrictTo([ROLE_TYPE.ADMIN])),
  joiCatchAsync(validate(deleteVideoSchema)),
  catchAsync(new VideoAdminController().delete)
);

export { videoAdminRouter };
