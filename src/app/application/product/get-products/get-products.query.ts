import { UseCase } from "src/app/application/base/use-case.base";
import { Product } from "src/app/domain/entities/product.model";

export abstract class GetProductsQuery implements UseCase<void, Product[]> {

    abstract execute(): Product[]

}