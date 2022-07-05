import Joi from "joi";
import { emailSchema } from "./email";

export const adminRegisterSchema = emailSchema.keys({
  name: Joi.string().required(),
  password: Joi.string().required(),
});
