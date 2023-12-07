import { Channel } from "../entities/channel.model";

export abstract class ChannelRepository {

    abstract getChannels(): Channel[]
    
}