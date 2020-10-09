import { isSameDay } from "date-fns";
import { IDBPDatabase } from "idb";
import { parse } from "query-string";
import { DB } from "../db/db";
import { IndexdDB } from "../db/indexeddb";
import { IConsumption } from "../utils/interfaces/consumption.interface";
import { DietAppSchema } from "../utils/interfaces/db.schema";
import { IProduct } from "../utils/interfaces/product.interface";
import { IUser } from "../utils/interfaces/user.interface";
import { IWeightJournal } from "../utils/interfaces/weightJournal.interface";
import { UserSchema } from "../utils/schema/user.schema";
import { AppQuery } from "../utils/types/appQuery.type";

export class AppRepository {
    private db: DB<IDBPDatabase<DietAppSchema>>
    static currentUser: IUser
    constructor(db:DB<IDBPDatabase<DietAppSchema>> = new IndexdDB()){
        this.db = db
    }

    public static setCurrentUser (user:IUser) {
        AppRepository.currentUser = user
    }

    public async getOneProduct(id: number) {
        const db = await this.db.getConnection()
        const store = db.transaction("product").objectStore('product')
        const obj = await store.get(id)
        
        return obj;
    }
    
    public async getProducts(query?:string) {
        const pq:AppQuery = parse(query??'',{arrayFormatSeparator:',',arrayFormat:'comma', parseNumbers:true})
        const PER_PAGE = 20
        const db = await this.db.getConnection()
        const tx = db.transaction("product")
        const category = pq.category? Array.isArray(pq.category)? IDBKeyRange.bound(pq.category[0],pq.category[pq.category.length-1]):pq.category:null
        const store = category?
                        tx.store.index("by-category").iterate(category) :
                        tx.store.iterate()           
        let list = []
        let i = 1;
        for await(const cursor of store){
            if(pq.page && (pq.page > i) ) {
                i++
                cursor.advance((i+1-i)*PER_PAGE)
            }
            else if(list.length < PER_PAGE) {
                if(pq.category && Array.isArray(pq.category) && !pq.category.includes(cursor.key)) {
                    continue;
                }
                else list.push(cursor.value)
                    

            } else break;
            

        }
        return list;
        
    }

    public async findProduct(query: string) {
        const db = await this.db.getConnection()
        const store = db.transaction('product').store
        const list = []
        const regExp = new RegExp(query.toLowerCase(),'gi')
        
        for await(const cursor of store.iterate()){
            if(cursor.value.name.toLowerCase().search(regExp) > -1 && list.length < 10) {
                list.push(cursor.value)
                console.log(cursor.value);
                
            }

        }
        return list;
    }

    public filterProduct(product:IProduct, key:string) {
        switch (key) {
            case 'carbohydrate':
                return +product.carbohydrate === 0
            case 'protein': 
                return +product.protein === 0
            case 'fats':
                return +product.fats === 0
            default:
                return true;
        }
    }
    public async createUser(user: UserSchema, id?: number):Promise<IUser> {
      const db = await this.db.getConnection()
      const res = await db.put('user',id? {id,...user}:user)
      return {
          ...user,
          id: res,
      }
    }

    public async getAllUsers() {
        const db = await this.db.getConnection()
        const users = await db.getAll('user')

        return users;
    }

    public async addToJournal(journalRec:IWeightJournal) {
        const db = await this.db.getConnection()
        const store = db.transaction('user','readwrite').objectStore("user")
        const user = await store.get(AppRepository.currentUser.id)
        if(user) {
            const index = user.journal.findIndex(w=>isSameDay(new Date(w.date),new Date(journalRec.date)))
            if(index > -1) {
                const newJournal = [
                    ...user.journal.slice(0,index),
                    journalRec,
                    ...user.journal.slice(index+1)
                ]
                await store.put({
                    ...user,
                    journal: newJournal
                })


                return newJournal;

            } else {
                const newJournal:IWeightJournal[] = [
                    ...user.journal,
                    journalRec
                ]
                await store.put({
                    ...user,
                    journal:newJournal 
                })
        
                return newJournal;

            }
        } else return [];
        
    }

    public async addConsumption(consumption:IConsumption) {
        const db = await this.db.getConnection()
        await db.transaction("consumption","readwrite").objectStore("consumption").put({
            userId: AppRepository.currentUser.id,
            ...consumption
        })

    }

    public async getConsumption(date: Date = new Date()) {
        const db = await this.db.getConnection()
        const store = db.transaction("consumption").objectStore("consumption").index("by-user").iterate(AppRepository.currentUser.id)
        const list = []
        for await(const cursor of store) {
            if(isSameDay(new Date(cursor.value.date), date)) list.push(cursor.value)
        }
        
        return list;

    }
}
