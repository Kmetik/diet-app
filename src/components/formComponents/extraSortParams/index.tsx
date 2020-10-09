import React from 'react'
import { useFormikContext } from 'formik'
import { ISortParams } from '../../productFilter/productFilter'



export const ExtraSortParams:React.FC = ()=>{
    const {handleChange,values} = useFormikContext<ISortParams>()
    return(
        <div className="col-12">
            <div className="row d-flex flex-row mt-2 mb-2 p-1 bg-white rounded shadow-sm">
            <div className="col-auto">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="protein-control" name="protein" value={0} onChange={handleChange} defaultChecked={values.protein?true:false}/>
                    <label className="custom-control-label font-weight-light" htmlFor="protein-control">Без белка</label>

                </div>
            </div>
            <div className="col-auto">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="carbohydrate" id="carbohydrate-control" className="custom-control-input" value={0} onChange={handleChange} defaultChecked={values.carbohydrate?true:false}/>
                    <label htmlFor="carbohydrate-control" className="custom-control-label font-weight-light">Без углеводов</label>
                </div>
            </div>
            <div className="col-auto">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="fats" id="fats-control" className="custom-control-input" value={0} onChange={handleChange} defaultChecked={values.fats?true:false}/>
                    <label htmlFor="fats-control" className="custom-control-label font-weight-light">Без жиров</label>
                </div>
            </div>
        </div>
        </div>
    )
}