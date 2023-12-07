import { Reference } from "src/app/domain/entities/reference.model";
import { ReferenceRepository } from "src/app/domain/repository/reference.repository";

export class ReferenceStorage implements ReferenceRepository {

    references: Reference[] = [
        {
            id: 1,
            name: 'Referencia_1'
        },
        {
            id: 2,
            name: 'Referencia_2'
        },
        {
            id: 3,
            name: 'Referencia_3'
        }
    ]

    private referenceKey: string = 'reference';

    constructor() {
        this.setReferenceData();
    }

    private setReferenceData() {
        localStorage.setItem(this.referenceKey, JSON.stringify(this.references))
    }

    public getReferences(): Reference[] {

        const references: Reference[] = JSON.parse(localStorage.getItem(this.referenceKey) || "")

        return references
    }
}