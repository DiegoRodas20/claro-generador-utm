import { Campaign, SourceCampaign, TypeCampaign } from "../entities/campaign.model";

export abstract class CampaignRepository {

    abstract getCampaigns(): Campaign[]

    abstract getCampaignSources(): SourceCampaign[]

    abstract getCampaignTypes(): TypeCampaign[]
    
}