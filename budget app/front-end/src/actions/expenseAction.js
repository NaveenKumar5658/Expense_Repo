import axios from "axios";

export const startCreateExpense = (data, resetForm) => {
    return (dispatch) => {
        axios.post('http://localhost:3030/api/expense', data, {
            headers : {
                "authorization" : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(createExpense(result))
            resetForm()
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const createExpense = (data) => {
    return {
        type : 'ADD_EXPENSE',
        payload : data
    }
}

export const startListExpense = () => {
    return (dispatch) => {
        axios.get('http://localhost:3030/api/expense', {
            headers : {
                "authorization" : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result =  response.data 
            dispatch(ListExpense(result))
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const ListExpense = (data) => {
    return {
        type : 'GET_EXPENSE',
        payload : data
    }
}

