import { AppError } from "../../../error-module/baseError/appError";
import { STATUS_CODE } from "../../../error-module/types/statusCode";

class PlaylistAdminHelper {
  validateSubscribePlaylist(playlist: any) {
    const expireAt = playlist?.expireAt;

    if (!playlist || new Date(expireAt) < new Date())
      throw new AppError(
        "You don't have permission to play this playlist",
        STATUS_CODE.AUTHORIZATION_ERROR
      );
  }
}

export default new PlaylistAdminHelper();
