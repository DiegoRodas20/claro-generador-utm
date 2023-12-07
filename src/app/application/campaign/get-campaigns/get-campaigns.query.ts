import { UseCase } from "src/app/application/base/use-case.base";
import { Campaign } from "src/app/domain/entities/campaign.model";

export abstract class GetCampaignsQuery implements UseCase<void, Campaign[]> {

    abstract execute(): Campaign[]

}