import { Campaign, SourceCampaign, TypeCampaign } from "src/app/domain/entities/campaign.model";
import { CampaignRepository } from "src/app/domain/repository/campaign.repository";

export class CampaignStorage implements CampaignRepository {

    campaigns: Campaign[] = [
        {
            id: 1,
            name: 'Campaña_1'
        },
        {
            id: 2,
            name: 'Campaña_2'
        },
        {
            id: 3,
            name: 'Campaña_3'
        }
    ]

    typesCampaign: TypeCampaign[] = [
        {
            id: 1,
            name: 'Tipo_Campaña_1'
        },
        {
            id: 2,
            name: 'Tipo_Campaña_2'
        },
        {
            id: 3,
            name: 'Tipo_Campaña_3'
        }
    ]

    sourcesCampaign: SourceCampaign[] = [
        {
            id: 1,
            name: 'Fuente_Campaña_1'
        },
        {
            id: 2,
            name: 'Fuente_Campaña_2'
        },
        {
            id: 3,
            name: 'Fuente_Campaña_3'
        }
    ]

    private campaignKey: string = 'campaign';
    private typeCampaignKey: string = 'type_campaign';
    private sourceCampaignKey: string = 'source_campaign';

    constructor() {
        this.setCampaignData();
    }

    private setCampaignData() {
        localStorage.setItem(this.campaignKey, JSON.stringify(this.campaigns))
        localStorage.setItem(this.typeCampaignKey, JSON.stringify(this.typesCampaign))
        localStorage.setItem(this.sourceCampaignKey, JSON.stringify(this.sourcesCampaign))
    }

    public getCampaigns(): Campaign[] {

        const campaigns: Campaign[] = JSON.parse(localStorage.getItem(this.campaignKey) || "")

        return campaigns
    }

    public getCampaignSources(): SourceCampaign[] {

        const sourcesCampaign: SourceCampaign[] = JSON.parse(localStorage.getItem(this.sourceCampaignKey) || "")
        return sourcesCampaign
    }

    public getCampaignTypes(): TypeCampaign[] {

        const typesCampaign: TypeCampaign[] = JSON.parse(localStorage.getItem(this.typeCampaignKey) || "")

        return typesCampaign
    }
}
