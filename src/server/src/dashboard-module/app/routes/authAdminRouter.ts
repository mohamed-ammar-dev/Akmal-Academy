import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import { AuthAdminController } from "../controllers/adminAuthController";
import { adminRegisterSchema } from "../schemas/auth/adminRegister";
import { loginAdminSchema } from "../schemas/auth/adminLogin";

const authAdminRouter = express.Router();

authAdminRouter.post(
  "/login",
  validate(loginAdminSchema),
  catchAsync(new AuthAdminController().login)
);

authAdminRouter.post(
  "/register",
  validate(adminRegisterSchema),
  catchAsync(new AuthAdminController().register)
);

export { authAdminRouter };
