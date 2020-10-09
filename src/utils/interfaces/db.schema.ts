import { DBSchema } from "idb";
import { UserSchema } from "../schema/user.schema";
import { IProduct } from "./product.interface";
import { IProductCategory } from "./productCategory.interface";

export interface DietAppSchema extends DBSchema{
    product: {
        value: IProduct,
        key: number
        indexes: {
            'by-name':string
            'by-category': number
            'by-props':Array<string>
        }
    }
    category: {
        value: IProductCategory,
        key: number 
    }
    user: {
        value: UserSchema,
        key: number,
    }
    consumption: {
        key: number
        value: {
            userId: number
            product: IProduct
            weight: string
            date: string
        }
        indexes: {
            'by-user':number
        }
    }
}