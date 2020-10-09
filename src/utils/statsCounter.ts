import Axios from "axios";
import { compareAsc, differenceInYears, setHours } from "date-fns";
import { ActvityLevelType } from "./enums/al.enum";
import { Gender } from "./enums/gender.enum";
import { IBNR } from "./interfaces/bnr.interface";
import { IConsumption } from "./interfaces/consumption.interface";
import { IProduct } from "./interfaces/product.interface";
import { IUser } from "./interfaces/user.interface";

export function countUserLimits(user:IUser):IBNR {
    const age = differenceInYears(new Date(),new Date(user.birthday))
    const limit = Gender.male === user.gender? 5: 161
    const energyLimit = ((10* user.weight) + (6.25 * user.height) - (5*age) - limit ) * user.activityLevel
    const cC = ActvityLevelType.athlete === user.activityLevel? 2.2: 1
    const cF = ActvityLevelType.athlete === user.activityLevel? 1.5: 1
    const cP = ActvityLevelType.athlete === user.activityLevel? 1.4: 1
        
    
    return {
        energy: energyLimit,
        carbohydrate: 2* user.weight * cC,
        fats: 0.8* user.weight* cF,
        protein: 1.5* user.weight* cP
    }
}

export function countConsumptionStats(consumptionList: IConsumption[]):IBNR {
    return {
        fats: consumptionList.reduce((prev, current)=>prev+ (+current.product.fats * (+current.weight /100)),0),
        carbohydrate: consumptionList.reduce((prev, current)=>prev+ (+current.product.carbohydrate * (+current.weight /100)),0),
        protein: consumptionList.reduce((prev, current)=>prev+ (+current.product.protein*(+current.weight /100)),0),
        energy: consumptionList.reduce((prev, current)=>prev+ (+current.product.energy*(+current.weight /100)),0)

    }
}


export async function makeFakeDateConsumption(date: Date)  {
        const json = await Axios.get('dataGarbage/productdb.json')
        const data:IProduct[] = await json.data

        const consumption:IConsumption[] = []

        while (consumption.length < 6) {
            let rand = Math.random()
            let productRand = parseInt((rand*data.length).toFixed())
            let portionRand = parseInt((rand*300 + 50).toFixed())
            let randHour = parseInt((rand * 24).toFixed())
            consumption.push({
                date: setHours(date,randHour).toString(),
                weight: (portionRand - portionRand % 20).toString(),
                product: data[productRand]
            })
        }

        return consumption.sort((left, right)=>compareAsc(new Date(left.date),new Date(right.date)));

}