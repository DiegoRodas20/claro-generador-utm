import { Product } from "src/app/domain/entities/product.model";
import { ProductRepository } from "src/app/domain/repository/product.repository";

export class ProductStorage implements ProductRepository {

    products: Product[] = [
        {
            id: 1,
            name: 'Producto_1'
        },
        {
            id: 2,
            name: 'Producto_2'
        },
        {
            id: 3,
            name: 'Producto_3'
        }
    ]

    private productKey: string = 'product';

    constructor() {
        this.setProductData();
    }

    private setProductData() {
        localStorage.setItem(this.productKey, JSON.stringify(this.products))
    }

    public getProducts(): Product[] {

        const products: Product[] = JSON.parse(localStorage.getItem(this.productKey) || "")

        return products
    }
}