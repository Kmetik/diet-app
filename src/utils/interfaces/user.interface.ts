import { IWeightJournal } from "./weightJournal.interface";

export interface IUser {
    id: number,
    name: string ,
    weight: number,
    height:number,
    activityLevel: number,
    gender: string,
    birthday: string
    journal: IWeightJournal[]
}