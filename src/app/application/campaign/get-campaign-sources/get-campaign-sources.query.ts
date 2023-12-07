import { UseCase } from "src/app/application/base/use-case.base";
import { SourceCampaign } from "src/app/domain/entities/campaign.model";

export abstract class GetCampaignSourcesQuery implements UseCase<void, SourceCampaign[]> {

    abstract execute(): SourceCampaign[]

}