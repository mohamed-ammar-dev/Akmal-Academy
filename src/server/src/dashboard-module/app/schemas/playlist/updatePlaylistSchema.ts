import Joi from "joi";

export const updatePlaylistSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});
