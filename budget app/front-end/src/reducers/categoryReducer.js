const initialState = []

const categoryReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_CATEGORY' : {
            return [...state, {...action.payload}]
        }
        case 'GET_CATEGORY' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default categoryReducer