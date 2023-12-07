import { Reference } from "../entities/reference.model";

export abstract class ReferenceRepository {

    abstract getReferences(): Reference[]

}