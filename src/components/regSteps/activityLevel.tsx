import React from 'react'
import moderate from './assets/moderate.svg'
import active from './assets/active.svg'
import athlete from './assets/athlete.svg'
import office from './assets/lowlevel.svg'
import lowlevel from './assets/plant.svg'
import { RadioButtonGroup } from '../formComponents/radioButtonGroup'
import styles from './regSteps.module.scss'
import { RegStepProps } from '../hoc/regStepsHoc'
import { ActvityLevelType } from '../../utils/enums/al.enum'


export const ActivityLevel:React.FC<RegStepProps> = ({formik})=> {
    return (
        <div className="col-12 text-white bg-success">
            <div className="row min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="col-8">
                    <h1 className={styles['reg-step']}>Твой уровень активности:</h1>
                </div>
                <div className="col-8">
                <RadioButtonGroup
                    onValueSet={formik.handleChange}
                    onSubmit={formik.submitForm}
                    name={'activityLevel'}
                    defaultValue={formik.values.activityLevel}
                    options={
                        [{
                            src: lowlevel,
                            value: ActvityLevelType.lowlevel,
                            alt: 'Минимальная активность'
                        },
                        {
                            src: office,
                            value: ActvityLevelType.office,
                            alt: "Слабая активность"
                        },
                        {
                            src: moderate,
                            value:ActvityLevelType.moderate,
                            alt: "Средняя активность"
                        },
                        
                        {
                            src: active,
                            value: ActvityLevelType.active,
                            alt: "Высокая активность"
                        },
                        {
                            src: athlete,
                            value: ActvityLevelType.athlete,
                            alt: "Высокие спортивные нагрузки, профессиональный атлет"
                        }
                        ]
                    }
                    
                />
                </div>
        </div>
        </div>
    )
}