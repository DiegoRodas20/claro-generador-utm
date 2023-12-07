import { Injectable } from "@angular/core";
import { TypeCampaign } from "src/app/domain/entities/campaign.model";
import { CampaignRepository } from "src/app/domain/repository/campaign.repository";
import { GetCampaignTypesQuery } from "./get-campaign-types.query";

@Injectable({
    providedIn: 'root'
})
export class GetCampaignTypesQueryHandler implements GetCampaignTypesQuery {

    constructor(
        private _campaignRepository: CampaignRepository
    ) { }

    execute(): TypeCampaign[] {

        return this._campaignRepository.getCampaignTypes()
    }
}