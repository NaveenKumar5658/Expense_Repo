import React from "react"
import BudgetView from "./BudgetView"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"



function Home(props){
    return (
        <div>
            <h1>Home Component</h1>
            <BudgetView />
            <ExpenseForm />
            <ExpenseList />
        </div>
        
    )
}

export default Home