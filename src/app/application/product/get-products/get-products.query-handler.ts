import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/entities/product.model";
import { ProductRepository } from "src/app/domain/repository/product.repository";
import { GetProductsQuery } from "./get-products.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsQueryHandler implements GetProductsQuery {

    constructor(
        private _productRepository: ProductRepository
    ) { }

    execute(): Product[] {

        return this._productRepository.getProducts()
    }
}