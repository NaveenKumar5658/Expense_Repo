import React from "react"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { startUserRegister } from "../../actions/userAction"


const UserRegister = (props) => {

    const formik = useFormik({
        initialValues : {            //argument1
            name : '',
            email : '',
            password : '',
            occupation : ''
        },
        validationSchema : Yup.object({  //argument2
            name : Yup.string().required(),
            email : Yup.string().email().required(),
            password : Yup.string().min(8).required(),
            occupation : Yup.string()
        }),
        onSubmit : function(values){     //argument3
            const data = {email : values.email , password : values.password, profile : {name : values.name, occupation : values.occupation} }
            const redirect = () => {
                props.history.push("/user/login")
            }
            startUserRegister(data, redirect)
        }
    })

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" 
                    value={formik.values.name} 
                    name="name" 
                    onChange={formik.handleChange}
                    placeholder="enter your name"
                />
                {formik.touched.name && formik.errors.name &&<span>{formik.errors.name}</span>}
                <br/><br/>
                <input type="email" 
                    value={formik.values.email} 
                    name="email" 
                    onChange={formik.handleChange}
                    placeholder="enter your email"
                />
                {formik.touched.email && formik.errors.email &&<span>{formik.errors.email}</span>}
                <br/><br/>
                <input type="password" 
                    value={formik.values.password} 
                    name="password" 
                    onChange={formik.handleChange}
                    placeholder="enter your password"
                />
                {formik.touched.password && formik.errors.password &&<span>{formik.errors.password}</span>}
                <br/><br/>
                <input type="text" 
                    value={formik.values.occupation} 
                    name="occupation" 
                    onChange={formik.handleChange}
                    placeholder="enter your occupation"
                />
                {formik.touched.occupation && formik.errors.occupation &&<span>{formik.errors.occupation}</span>}
                <br/><br/>
                <input type="submit" value=" Register "/>
            </form>
        </div>
    )
}

export default UserRegister