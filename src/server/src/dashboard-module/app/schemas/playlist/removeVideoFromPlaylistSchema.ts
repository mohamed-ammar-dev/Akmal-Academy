import Joi from "joi";

export const removeVideoFromPlaylistSchema = Joi.object({
  playlistId: Joi.number().required(),
  videoId: Joi.number().required(),
});
