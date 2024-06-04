import React, {useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import {startListBudget} from "../../actions/budgetAction"

function BudgetView(props){
    const dispatch = useDispatch()

    const budget = useSelector((state) => {
        return state.budget
    })
    const expense=useSelector((state)=>{
        return state.expense
    })

    const expenseAmount=expense.reduce((pv,cv)=>{
        return pv.isDeleted? pv : pv + cv.amount
    },0)

    const expenseValue=budget.amount - expenseAmount

    useEffect(() => {
        dispatch(startListBudget())
    }, [dispatch])

    return (
        <div>
            <p>Total Budget - Rs. {expenseValue}</p>
        </div>
        
    )
}

export default BudgetView