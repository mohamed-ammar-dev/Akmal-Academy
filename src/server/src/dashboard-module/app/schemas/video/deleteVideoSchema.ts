import Joi from "joi";

export const deleteVideoSchema = Joi.object({
  id: Joi.number().required(),
});
