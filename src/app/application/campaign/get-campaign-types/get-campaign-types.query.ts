import { UseCase } from "src/app/application/base/use-case.base";
import { TypeCampaign } from "src/app/domain/entities/campaign.model";

export abstract class GetCampaignTypesQuery implements UseCase<void, TypeCampaign[]> {

    abstract execute(): TypeCampaign[]

}