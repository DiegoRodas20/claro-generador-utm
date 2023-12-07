import { UseCase } from "src/app/application/base/use-case.base";
import { Reference } from "src/app/domain/entities/reference.model";

export abstract class GetReferencesQuery implements UseCase<void, Reference[]> {

    abstract execute(): Reference[]

}