import Axios from "axios";
import { IDBPDatabase, openDB } from "idb/with-async-ittr";
import { DietAppSchema } from "../utils/interfaces/db.schema";
import { IProduct } from "../utils/interfaces/product.interface";
import { IProductCategory } from "../utils/interfaces/productCategory.interface";
import { DB } from "./db";

export class IndexdDB extends DB<IDBPDatabase<DietAppSchema>> {
    
    private dbName: string 
    
    constructor(dbName: string = 'diet_app'){
        super()
        this.dbName = dbName
        this.initialize()
    }
    
    protected async initialize(): Promise<void> {
        const that = this
        await openDB<DietAppSchema>(this.dbName,1,{
            upgrade(database) {
                if(database.objectStoreNames.contains('product')) {
                    return
                } else {
                    const storeProduct = database.createObjectStore("product", {keyPath: "id", autoIncrement: true})
                    const storeConsumption = database.createObjectStore("consumption",{keyPath:"id", autoIncrement: true})
                    database.createObjectStore("category", {keyPath: "id", autoIncrement: true})
                    database.createObjectStore("user", {keyPath: "id", autoIncrement: true})
                    storeProduct.createIndex("by-name","name")
                    storeProduct.createIndex("by-category","categoryId")
                    storeProduct.createIndex('by-props',['carbohydrate','protein','fats'])
                    storeConsumption.createIndex("by-user","userId")
                    that.initiateDB()
                }
            }
        })
    }

    public async getConnection(): Promise<IDBPDatabase<DietAppSchema>> {
        const db = await openDB<DietAppSchema>(this.dbName)
        return db;
    }

    private async initiateDB(){
        const db = await this.getConnection()
        const [products, categories] = await this.fetchDataForUpgrade()
        const productTransaction = db.transaction("product","readwrite")
        const categoryTransaction = db.transaction("category","readwrite")

        products.forEach((product)=>productTransaction.objectStore('product').add(product))
        categories.forEach((category)=>categoryTransaction.objectStore('category').add(category))
        await productTransaction.done;
        await categoryTransaction.done;
    }   

    private async fetchDataForUpgrade() {
        const data = await Promise.all([
            this.fetchProducts(),
            this.fetchCategories()
        ])

        return data;


    }

    private async fetchProducts():Promise<Array<IProduct> > {
        const res = await Axios.get('dataGarbage/productdb.json')
        const data = await res.data
        return data
    }

    private async fetchCategories():Promise<Array<IProductCategory>> {
        const res = await Axios.get('dataGarbage/categories.json')
        const data = await res.data
        return data
    }

}