import { Channel } from "src/app/domain/entities/channel.model";
import { ChannelRepository } from "src/app/domain/repository/channel.repository";

export class ChannelStorage implements ChannelRepository {

    channels: Channel[] = [
        {
            id: 1,
            name: 'Canal_1'
        },
        {
            id: 2,
            name: 'Canal_2'
        },
        {
            id: 3,
            name: 'Canal_3'
        }
    ]

    private channelKey: string = 'channel';

    constructor() {
        this.setChannelData();
    }

    private setChannelData() {
        localStorage.setItem(this.channelKey, JSON.stringify(this.channels))
    }

    public getChannels(): Channel[] {

        const channels: Channel[] = JSON.parse(localStorage.getItem(this.channelKey) || "")

        return channels
    }
}