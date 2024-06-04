import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {startListBudget} from "../../actions/budgetAction"
import { startUpdateBudget } from '../../actions/budgetAction'

const Budget = (props) => {
    const dispatch = useDispatch()

    const budget = useSelector((state) => {
        return state.budget
    })

    useEffect(() => {
        dispatch(startListBudget())
    }, [dispatch])

    const formik = useFormik({
        initialValues : {
            amount : ''
        },
        validationSchema : Yup.object({
            amount : Yup.number().required().typeError('Amount must be in number')
        }),
        onSubmit : function(values, {resetForm}){
            const data = {amount : Number(values.amount)}
            dispatch(startUpdateBudget(data, resetForm))
        }
    })

    return (
        <div>
            <h2>Budget Component</h2>
            <form onSubmit={formik.handleSubmit}>
                <label> Total Budget </label>
                <input type="text" 
                        value={formik.values.amount} 
                        name="amount" 
                        onChange={formik.handleChange}
                        placeholder={budget.amount}
                    />
                {formik.touched.amount && formik.errors.amount &&<span>{formik.errors.amount}</span>}
                <input type="submit" value=" update " />
            </form>
        </div>
    )
}

export default Budget