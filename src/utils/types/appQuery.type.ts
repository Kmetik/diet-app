
export interface ProductListQuery {
    page?: number
    category?: number | Array<number>
    carbohydrate?: string
    protein?: string
    fats?: string
}

export type AppQuery = ProductListQuery 