import { sign, verify } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { JWT_SECRET_KEY } from "../../../config/constants";
import { AppError } from "../../../error-module/baseError/appError";
import { STATUS_CODE } from "../../../error-module/types/statusCode";
import { token } from "../../../shared/types/tokens";

class AuthAdminHelper {
  generateAccessToken(payload: token) {
    return sign(payload, JWT_SECRET_KEY, { expiresIn: "1d" });
  }

  verifyAccessToken(token: string) {
    return verify(token, JWT_SECRET_KEY);
  }

  async hashPassword(password: string) {
    return await hash(password, 10);
  }

  async comparePassword(param: any) {
    return await compare(param.password, param.hashedPassword);
  }

  validateCredential(user: any) {
    if (!user)
      throw new AppError(
        "wrong username or password",
        STATUS_CODE.AUTHORIZATION_ERROR
      );
  }

  validateDuplicateRegister(user: any) {
    if (user)
      throw new AppError(
        "this email already exist",
        STATUS_CODE.VALIDATION_ERROR
      );
  }

  validateUser(user: any) {
    if (!user)
      throw new AppError(
        "this email is not registered before",
        STATUS_CODE.VALIDATION_ERROR
      );
  }
}

export default new AuthAdminHelper();
