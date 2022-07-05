import { DI_TYPES } from "../../../shared/types/di";
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IVideoRepo } from "../ports/IVideoRepo";
import { IVideoAdminCoreService } from "../../interfaces/IVideoAdminCoreService";

@injectable()
export class VideoAdminCoreService implements IVideoAdminCoreService {
  constructor(
    @inject(DI_TYPES.VideoRepo)
    private videoRepo: IVideoRepo
  ) {}

  async getAll() {
    return await this.videoRepo.getAll();
  }

  async create(params: any) {
    return await this.videoRepo.create(params);
  }

  async update(params: any) {
    const id = params.id;

    return await this.videoRepo.update!({
      condition: { id },
      update: {
        title: params.title,
        description: params.description,
        reference: params.reference,
      },
    });
  }

  async delete(params: any) {
    const id = params.id;

    return await this.videoRepo.delete!({ condition: { id } });
  }
}
