import {ActivityLevel} from './activityLevel'
import {BirthdayStep} from './birthday'
import {GenderStep} from './gender'
import {NameStep} from './name'
import {WeightAndHeight} from './weightAndHeight'
import withFormik from '../hoc/regStepsHoc'

const NameStepFormik = withFormik(NameStep)
const ActivityLevelFormik = withFormik(ActivityLevel)
const GenderStepFormik = withFormik(GenderStep)
const BirthdayStepFormik = withFormik(BirthdayStep)
const WeightAndHeightFormik = withFormik(WeightAndHeight)


export {
    ActivityLevelFormik as ActivityLevel,
    BirthdayStepFormik as BirthdayStep,
    GenderStepFormik as GenderStep,
    NameStepFormik as NameStep,
    WeightAndHeightFormik as WeightAndHeight
}