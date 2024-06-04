import axios from "axios";
import swal from "sweetalert"

export const startCreateCategory = (data, resetForm) => {
    return (dispatch) => {
        axios.post('http://localhost:3030/api/category', data, {
            headers : {
                "authorization" : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(createCategory(result))
            resetForm()
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const createCategory = (data) => {
    return {
        type : 'ADD_CATEGORY',
        payload : data
    }
}

export const startListCategory = () => {
    return (dispatch) => {
        axios.get('http://localhost:3030/api/category', {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(listCategory(result))
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const listCategory = (data) => {
    return {
        type : 'GET_CATEGORY',
        payload : data
    }
}