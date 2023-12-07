import { UseCase } from "src/app/application/base/use-case.base";
import { Channel } from "src/app/domain/entities/channel.model";

export abstract class GetChannelsQuery implements UseCase<void, Channel[]> {

    abstract execute(): Channel[]

}