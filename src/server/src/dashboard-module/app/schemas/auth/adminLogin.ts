import Joi from "joi";
import { emailSchema } from "./email";

export const loginAdminSchema = emailSchema.keys({
  password: Joi.string().required(),
});
