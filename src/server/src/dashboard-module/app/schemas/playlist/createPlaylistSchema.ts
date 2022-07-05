import Joi from "joi";

export const createPlaylistSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
