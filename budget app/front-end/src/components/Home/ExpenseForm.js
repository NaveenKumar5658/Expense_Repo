import React, {useEffect, useState} from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import {useSelector, useDispatch} from 'react-redux'
import {startListCategory} from '../../actions/categoryAction'
import { startCreateExpense } from "../../actions/expenseAction"

const ExpenseForm = (props) => {
    const [toggle, setToggle] =useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    const dispatch = useDispatch()

    const category = useSelector((state) => {
        return state.category
    })

    useEffect(() => {
        dispatch(startListCategory())
    }, [dispatch])

    const formik = useFormik({
        initialValues : {
            title : '',
            amount : '',
            expenseDate : '',
            category : ''
        },
        validationSchema : Yup.object({
            title : Yup.string().required(),
            amount : Yup.number().required().typeError('Amount must be in number'),
            expenseDate : Yup.date().required(),
            category : Yup.string().required()
        }),
        onSubmit : function(values, {resetForm}) {
            const data = {title : values.title, amount : Number(values.amount), expenseDate : values.expenseDate, category : values.category}
            dispatch(startCreateExpense(data, resetForm))
        }
    })

    return (
        <div>
            <h2>Expense Form</h2>
            <button onClick={handleClick}> ADD EXPENSE </button>
            {toggle && (
                <form onSubmit={formik.handleSubmit}>
                <br/><label> Title </label>
                <input type="text" 
                    value={formik.values.title}
                    name="title"
                    onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title &&<span>{formik.errors.title}</span>}
                <br/><br/>
                <label> Amount </label>
                <input type="text" 
                    value={formik.values.amount}
                    name="amount"
                    onChange={formik.handleChange}
                />
                {formik.touched.amount && formik.errors.amount &&<span>{formik.errors.amount}</span>}
                <br/><br/>
                <label> Expense Date </label>
                <input type="date" 
                    value={formik.values.expenseDate}
                    name="expenseDate"
                    onChange={formik.handleChange}
                />
                {formik.touched.expenseDate && formik.errors.expenseDate &&<span>{formik.errors.expenseDate}</span>}
                <br/><br/>
                <label> Category </label>
                <select name="category" onChange={formik.handleChange}>
                <option> select categories </option>
                {
                    category.map((ele) => {
                        return <option key={ele._id} value={ele._id}>{ele.name}</option>
                    })
                }
                </select>
                {formik.touched.category && formik.errors.category && <span>{formik.errors.category}</span>}
                <br/><br/>
                <input type="submit" value="save" />
            </form>
                
            )}
            
        </div>
    )
}

export default ExpenseForm