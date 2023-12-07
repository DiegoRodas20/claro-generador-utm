import { Injectable } from "@angular/core";
import { Channel } from "src/app/domain/entities/channel.model";
import { ChannelRepository } from "src/app/domain/repository/channel.repository";
import { GetChannelsQuery } from "./get-channels.query";

@Injectable({
    providedIn: 'root'
})
export class GetChannelsQueryHandler implements GetChannelsQuery {

    constructor(
        private _channelRepository: ChannelRepository
    ) { }

    execute(): Channel[] {

        return this._channelRepository.getChannels()
    }
}