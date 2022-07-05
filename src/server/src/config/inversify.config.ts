import { PlaylistVideoRepo } from "./../playlist-module/adapters/database/repository/playlistVideoRepo";
import { Container } from "inversify";
import { PlaylistCoreService } from "../playlist-module/domain/core/playlistCoreService";
import { IPlaylistVideoRepo } from "../playlist-module/domain/ports/IPlaylistVideoRepo";
import { IPlaylistCoreService } from "../playlist-module/interfaces/IPlaylistCoreService";
import { INotifier } from "../shared/interfaces/INotifier";
import { MailService } from "../shared/mailService/mailService";
import { DI_TYPES } from "../shared/types/di";
import { ForgetPasswordRepo } from "../user-management-module/adapters/database/repository/forgetPasswordRepo";
import { UserRepo } from "../user-management-module/adapters/database/repository/userRepo";
import { UserAuthCoreService } from "../user-management-module/domain/core/auth/authCoreService";
import { IForgetPasswordRepo } from "../user-management-module/domain/ports/auth/IForgetPasswordRepo";
import { IUserRepo } from "../user-management-module/domain/ports/user/IUserRepo";
import { IUserAuthCoreService } from "../user-management-module/interfaces/IUserAuthCoreService";
import { UserPlaylistRepo } from "../playlist-module/adapters/database/repository/userPlaylistRepo";
import { IUserPlaylistRepo } from "../playlist-module/domain/ports/IUserPlaylistRepo";
import { IPlaylistAdminCoreService } from "../dashboard-module/interfaces/IPlaylistAdminCoreService";
import { PlaylistAdminCoreService } from "../dashboard-module/domain/core/playlistAdminCoreService";
import { IVideoAdminCoreService } from "../dashboard-module/interfaces/IVideoAdminCoreService";
import { VideoAdminCoreService } from "../dashboard-module/domain/core/videoAdminCoreService";
import { IPlaylistRepo } from "../dashboard-module/domain/ports/IPlaylistRepo";
import { PlaylistRepo } from "../dashboard-module/adapters/database/repository/playlistRepo";
import { IVideoRepo } from "../dashboard-module/domain/ports/IVideoRepo";
import { VideoRepo } from "../dashboard-module/adapters/database/repository/videoRepo";
import { IAuthAdminCoreService } from "../dashboard-module/interfaces/IAuthAdminCoreService";
import { AuthAdminCoreService } from "../dashboard-module/domain/core/authAdminCoreService";
import { IAdminRepo } from "../dashboard-module/domain/ports/IAdminRepo";
import { AdminRepo } from "../dashboard-module/adapters/database/repository/adminRepo";
import { IUserInfoCoreService } from "../user-management-module/interfaces/IUserInfoCoreService";
import { UserInfoCoreService } from "../user-management-module/domain/core/userInfo/userInfoCoreService";

const diContainer = new Container();

diContainer
  .bind<IUserAuthCoreService>(DI_TYPES.UserAuthCoreService)
  .to(UserAuthCoreService);
diContainer
  .bind<IPlaylistCoreService>(DI_TYPES.PlaylistCoreService)
  .to(PlaylistCoreService);
diContainer
  .bind<IPlaylistAdminCoreService>(DI_TYPES.PlaylistAdminCoreService)
  .to(PlaylistAdminCoreService);
diContainer
  .bind<IVideoAdminCoreService>(DI_TYPES.VideoAdminCoreService)
  .to(VideoAdminCoreService);
diContainer
  .bind<IAuthAdminCoreService>(DI_TYPES.AuthAdminCoreService)
  .to(AuthAdminCoreService);
diContainer
  .bind<IUserInfoCoreService>(DI_TYPES.UserInfoCoreService)
  .to(UserInfoCoreService);

diContainer.bind<INotifier>(DI_TYPES.MailService).to(MailService);

diContainer
  .bind<IForgetPasswordRepo>(DI_TYPES.ForgetPasswordRepo)
  .to(ForgetPasswordRepo)
  .inSingletonScope();
diContainer.bind<IUserRepo>(DI_TYPES.UserRepo).to(UserRepo).inSingletonScope();
diContainer
  .bind<IPlaylistVideoRepo>(DI_TYPES.PlaylistVideoRepo)
  .to(PlaylistVideoRepo)
  .inSingletonScope();
diContainer
  .bind<IUserPlaylistRepo>(DI_TYPES.UserPlaylistRepo)
  .to(UserPlaylistRepo)
  .inSingletonScope();
diContainer
  .bind<IPlaylistRepo>(DI_TYPES.PlaylistRepo)
  .to(PlaylistRepo)
  .inSingletonScope();
diContainer
  .bind<IVideoRepo>(DI_TYPES.VideoRepo)
  .to(VideoRepo)
  .inSingletonScope();
diContainer
  .bind<IAdminRepo>(DI_TYPES.AdminRepo)
  .to(AdminRepo)
  .inSingletonScope();

export { diContainer };
