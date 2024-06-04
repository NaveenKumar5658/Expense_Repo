import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { startCreateCategory, startListCategory } from '../../actions/categoryAction'
import CategoryItem from './CategoryItem'


const CategoryForm = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startListCategory())
    }, [dispatch])
    
    const formik = useFormik({
        initialValues : {
            name : ''
        },
        validationSchema : Yup.object({
            name : Yup.string().required()
        }),
        onSubmit : function(values, {resetForm}){
            const data = {name : values.name}
            dispatch(startCreateCategory(data, resetForm))
        }
    })
    return (
        <div>
            <h2>Category Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <label> Categories </label>
                <input type="text" 
                    value={formik.values.name}
                    name="name"
                    onChange={formik.handleChange}
                    placeholder="category name here"
                />
                {formik.touched.name && formik.errors.name &&<span>{formik.errors.name}</span>}
                <input type="submit" value=" Add " />
            </form>
            <CategoryItem />
        </div>
    )
}

export default CategoryForm