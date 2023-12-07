import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetCampaignSourcesQuery } from '../application/campaign/get-campaign-sources/get-campaign-sources.query';
import { GetCampaignTypesQuery } from '../application/campaign/get-campaign-types/get-campaign-types.query';
import { GetCampaignsQuery } from '../application/campaign/get-campaigns/get-campaigns.query';
import { GetChannelsQuery } from '../application/channel/get-channels/get-channels.query';
import { GetProductsQuery } from '../application/product/get-products/get-products.query';
import { GetReferencesQuery } from '../application/reference/get-references/get-references.query';
import { Campaign, SourceCampaign, TypeCampaign } from '../domain/entities/campaign.model';
import { Channel } from '../domain/entities/channel.model';
import { Product } from '../domain/entities/product.model';
import { Reference } from '../domain/entities/reference.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-presentation',
    templateUrl: 'presentation.component.html'
})

export class PresentationComponent implements OnInit {

    URL_UTM: string = "https://www.claro.com.pe/personas/movil"

    campaigns: Campaign[] = []
    sourcesCampaign: SourceCampaign[] = []
    typesCampaign: TypeCampaign[] = []
    channels: Channel[] = []
    products: Product[] = []
    references: Reference[] = []

    formPresentation: FormGroup = new FormGroup({})

    constructor(
        private _formBuilder: FormBuilder,
        private _alertService: ToastrService,
        private _getCampaignSources: GetCampaignSourcesQuery,
        private _getCampaignTypes: GetCampaignTypesQuery,
        private _getCampaigns: GetCampaignsQuery,
        private _getChannels: GetChannelsQuery,
        private _getProducts: GetProductsQuery,
        private _getReferences: GetReferencesQuery
    ) { }

    ngOnInit() {
        this.createForm()
        this.getCampaigns()
        this.getChannels()
        this.getProducts()
        this.getReferences()
        this.getSourcesCampaign()
        this.getTypesCampaign()

    }

    public createForm() {
        this.formPresentation = this._formBuilder.group({
            campaign: ['', [Validators.required]],
            channel: ['', [Validators.required]],
            product: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            source_campaign: ['', [Validators.required]],
            type_campaign: ['', [Validators.required]],
            url_utm: ['']
        })
    }

    public getCampaigns() {
        this.campaigns = this._getCampaigns.execute()
    }

    public getChannels() {
        this.channels = this._getChannels.execute()
    }

    public getProducts() {
        this.products = this._getProducts.execute()
    }

    public getReferences() {
        this.references = this._getReferences.execute()
    }

    public getSourcesCampaign() {
        this.sourcesCampaign = this._getCampaignSources.execute()
    }

    public getTypesCampaign() {
        this.typesCampaign = this._getCampaignTypes.execute()
    }

    public generateUTM() {

        const formValue = this.formPresentation.value

        if (this.formPresentation.invalid) {
            this._alertService.error('Completar todos los campos')
            return
        }

        const generateURL = `${this.URL_UTM}/${formValue['product'].name}/?utm_campaign=${formValue['campaign'].name}&utm_source=${formValue['source_campaign'].name}&utm_medium=${formValue['channel'].name}&utm_content${formValue['reference'].name}&utm_term=${formValue['product'].name}-${formValue['type_campaign'].name}`

        this._alertService.success('Su UTM ha sido generada')
        
        this.formPresentation.get('url_utm')?.setValue(generateURL)
    }

}
