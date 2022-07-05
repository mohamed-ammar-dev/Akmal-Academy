import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { IPlaylistCoreService } from "../../../playlist-module/interfaces/IPlaylistCoreService";
import { DI_TYPES } from "../../../shared/types/di";

export class ViewsController {
  async renderHome(request: Request, response: Response) {
    response.render("index.ejs");
  }

  async renderAuthentication(request: Request, response: Response) {
    response.render("login.ejs");
  }

  async renderTwoFactorLogin(request: Request, response: Response) {
    response.render("twoFactorLogin.ejs");
  }

  async renderForgetPassword(request: Request, response: Response) {
    response.render("forgetPassword.ejs");
  }

  async renderForgetPasswordCode(request: Request, response: Response) {
    response.render("forgetPasswordCode.ejs");
  }

  async renderResetPassword(request: Request, response: Response) {
    response.render("resetPassword.ejs");
  }

  async renderMyPlaylists(request: Request, response: Response) {
    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );

    const playlists = await playlistCoreService.getMyPlaylists(request.user.id);

    response.render("playlists.ejs", { playlists });
  }

  async renderMyPlaylistVideos(request: Request, response: Response) {
    let videoIndex: number = +request.query.video!;

    videoIndex = videoIndex && typeof videoIndex == "number" ? videoIndex : 0;

    const playlistCoreService = diContainer.get<IPlaylistCoreService>(
      DI_TYPES.PlaylistCoreService
    );

    const videos = await playlistCoreService.getMyPlaylistVideos({
      userId: request.user.id,
      playlistId: +request.params.id,
    });

    const currentVideo = videos[videoIndex].video;

    response.render("videos.ejs", { videos, currentVideo });
  }

  async renderServices(request: Request, response: Response) {
    response.render("services.ejs");
  }

  async renderServiceIFRS(request: Request, response: Response) {
    response.render("ifrs.ejs");
  }

  async renderServiceCMA(request: Request, response: Response) {
    response.render("cma.ejs");
  }

  async renderServiceACCA(request: Request, response: Response) {
    response.render("acca.ejs");
  }

  async renderAboutUs(request: Request, response: Response) {
    response.render("aboutUs.ejs");
  }

  // async renderPolicy(request: Request, response: Response) {
  //   response.render("policy.ejs");
  // }
}
