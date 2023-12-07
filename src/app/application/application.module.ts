import { NgModule } from "@angular/core";
import { GetCampaignSourcesQuery } from "./campaign/get-campaign-sources/get-campaign-sources.query";
import { GetCampaignSourcesQueryHandler } from "./campaign/get-campaign-sources/get-campaign-sources.query-handler";
import { GetCampaignTypesQuery } from "./campaign/get-campaign-types/get-campaign-types.query";
import { GetCampaignTypesQueryHandler } from "./campaign/get-campaign-types/get-campaign-types.query-handler";
import { GetCampaignsQuery } from "./campaign/get-campaigns/get-campaigns.query";
import { GetCampaignsQueryHandler } from "./campaign/get-campaigns/get-campaigns.query-handler";
import { GetChannelsQuery } from "./channel/get-channels/get-channels.query";
import { GetChannelsQueryHandler } from "./channel/get-channels/get-channels.query-handler";
import { GetProductsQuery } from "./product/get-products/get-products.query";
import { GetProductsQueryHandler } from "./product/get-products/get-products.query-handler";
import { GetReferencesQuery } from "./reference/get-references/get-references.query";
import { GetReferencesQueryHandler } from "./reference/get-references/get-references.query-handler";

@NgModule({
    providers: [
        { provide: GetCampaignsQuery, useClass: GetCampaignsQueryHandler },
        { provide: GetCampaignTypesQuery, useClass: GetCampaignTypesQueryHandler },
        { provide: GetCampaignSourcesQuery, useClass: GetCampaignSourcesQueryHandler },
        { provide: GetChannelsQuery, useClass: GetChannelsQueryHandler },
        { provide: GetProductsQuery, useClass: GetProductsQueryHandler },
        { provide: GetReferencesQuery, useClass: GetReferencesQueryHandler},
    ]
})

export class ApplicationModule { }