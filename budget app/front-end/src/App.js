import React from "react"
import axios from 'axios'
import NavBar from "./components/NavBar"
//import './App.css'

function App() {

  const user='https://jsonplaceholder.typicode.com/users'


  return (
    <div className="App">
      {Map.user=()=>{
        <p>{user.name}</p>
      }}
    </div>
  )
}

export default App
