import Joi from "joi";

export const getPlaylistVideosSchema = Joi.object({
  playlistId: Joi.number().required(),
});
