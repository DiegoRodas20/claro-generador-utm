import { Injectable } from "@angular/core";
import { Campaign } from "src/app/domain/entities/campaign.model";
import { CampaignRepository } from "src/app/domain/repository/campaign.repository";
import { GetCampaignsQuery } from "./get-campaigns.query";

@Injectable({
    providedIn: 'root'
})
export class GetCampaignsQueryHandler implements GetCampaignsQuery {

    constructor(
        private _campaignRepository: CampaignRepository
    ) { }

    execute(): Campaign[] {

        return this._campaignRepository.getCampaigns()
    }
}