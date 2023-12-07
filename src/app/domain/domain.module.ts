import { NgModule } from "@angular/core";
import { CampaignStorage } from "../infrastructure/local-storage/campaing-storage.repository";
import { ChannelStorage } from "../infrastructure/local-storage/channel-storage.repository";
import { ProductStorage } from "../infrastructure/local-storage/product-storage.repository";
import { ReferenceStorage } from "../infrastructure/local-storage/reference-storage.repository";
import { CampaignRepository } from "./repository/campaign.repository";
import { ChannelRepository } from "./repository/channel.repository";
import { ProductRepository } from "./repository/product.repository";
import { ReferenceRepository } from "./repository/reference.repository";

@NgModule({
    providers: [
        { provide: CampaignRepository, useClass: CampaignStorage },
        { provide: ChannelRepository, useClass: ChannelStorage },
        { provide: ProductRepository, useClass: ProductStorage },
        { provide: ReferenceRepository, useClass: ReferenceStorage },
    ]
})

export class DomainModule { }