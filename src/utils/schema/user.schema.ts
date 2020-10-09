import { IWeightJournal } from "../interfaces/weightJournal.interface";

export interface UserSchema  {
    id?:number,
    name: string ,
    weight: number,
    height:number,
    activityLevel: number,
    gender: string,
    birthday: string
    journal: IWeightJournal[]
}