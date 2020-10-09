import { ActvityLevelType } from "../enums/al.enum";
import { Gender } from "../enums/gender.enum";

export interface UserRegForm {
    id?: number
    name?: string
    activityLevel?: ActvityLevelType
    gender?: Gender
    weight?: number
    height?: number
    birthday?: string
    
}