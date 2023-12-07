import { Injectable } from "@angular/core";
import { SourceCampaign } from "src/app/domain/entities/campaign.model";
import { CampaignRepository } from "src/app/domain/repository/campaign.repository";
import { GetCampaignSourcesQuery } from "./get-campaign-sources.query";

@Injectable({
    providedIn: 'root'
})
export class GetCampaignSourcesQueryHandler implements GetCampaignSourcesQuery {

    constructor(
        private _campaignRepository: CampaignRepository
    ) { }

    execute(): SourceCampaign[] {

        return this._campaignRepository.getCampaignSources()
    }
}