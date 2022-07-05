import Joi from "joi";

export const playlistSchema = Joi.object({
  playlistId: Joi.number().required(),
});
