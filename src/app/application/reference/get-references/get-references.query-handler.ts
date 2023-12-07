import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/entities/product.model";
import { ReferenceRepository } from "src/app/domain/repository/reference.repository";
import { GetReferencesQuery } from "./get-references.query";

@Injectable({
    providedIn: 'root'
})
export class GetReferencesQueryHandler implements GetReferencesQuery {

    constructor(
        private _referenceRepository: ReferenceRepository
    ) { }

    execute(): Product[] {

        return this._referenceRepository.getReferences()
    }
}