import { IProduct } from "./product.interface";

export interface IConsumption {
    product: IProduct
    weight: string
    date: string
}