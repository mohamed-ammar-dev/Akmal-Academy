import Joi from "joi";

export const deletePlaylistSchema = Joi.object({
  id: Joi.number().required(),
});
