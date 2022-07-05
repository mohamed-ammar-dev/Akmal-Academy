import Joi from "joi";

export const addVideoToPlaylistSchema = Joi.object({
  playlistId: Joi.number().required(),
  videoId: Joi.number().required(),
});
