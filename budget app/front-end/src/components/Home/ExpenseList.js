import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { startListExpense } from "../../actions/expenseAction"

const ExpenseList = (props) => {
    const expense = useSelector((state) => {
        return state.expense
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startListExpense())
    }, [dispatch])

    return (
        <div>
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Expense Name</th>
                        <th>Expense Amount</th>
                        <th>Expense Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expense.map((ele) => {
                        return (
                            <tr key={ele._id}>
                                <td>{ele.category.name}</td>
                                <td>{ele.title}</td>
                                <td>{ele.amount}</td>
                                <td>{ele.expenseDate.slice(0,10).split('-').reverse().join('-')}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ExpenseList