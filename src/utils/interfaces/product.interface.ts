import { IBNR } from "./bnr.interface";

export interface IProduct extends IBNR {
    id: number
    name: string
    categoryId: number
}