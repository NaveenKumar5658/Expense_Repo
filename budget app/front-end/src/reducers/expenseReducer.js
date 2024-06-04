const initialState = []

const expenseReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_EXPENSE" : {
            return [...state, {...action.payload}]
        }
        case "GET_EXPENSE" : {
            return [...action.payload]
        }

        default : {
            return [...state]
        }
    }
}

export default expenseReducer