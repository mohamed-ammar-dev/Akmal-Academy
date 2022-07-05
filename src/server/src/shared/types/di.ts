export const DI_TYPES = {
  UserAuthCoreService: Symbol.for("UserAuthCoreService"),
  UserInfoCoreService: Symbol.for("UserInfoCoreService"),
  PlaylistCoreService: Symbol.for("PlaylistCoreService"),
  PlaylistAdminCoreService: Symbol.for("PlaylistAdminCoreService"),
  VideoAdminCoreService: Symbol.for("VideoAdminCoreService"),
  AuthAdminCoreService: Symbol.for("AuthAdminCoreService"),

  MailService: Symbol.for("MailService"),

  UserRepo: Symbol.for("UserRepo"),
  AdminRepo: Symbol.for("AdminRepo"),
  ForgetPasswordRepo: Symbol.for("ForgetPasswordRepo"),
  PlaylistRepo: Symbol.for("PlaylistRepo"),
  PlaylistVideoRepo: Symbol.for("PlaylistVideoRepo"),
  UserPlaylistRepo: Symbol.for("UserPlaylistRepo"),
  VideoRepo: Symbol.for("VideoRepo"),
};
