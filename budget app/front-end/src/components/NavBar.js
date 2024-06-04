import React, {useState} from "react"
import {Link, Route} from 'react-router-dom'
import UserRegister from "./User/UserRegister"
import UserLogin from "./User/UserLogin"
import PrivateRoute from "./PrivateRoute"
import UserProfile from "./User/UserProfile"
import Setting from "./Settings/Setting"
import Home from "./Home/Home"

const NavBar = (props) => {
    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('token')))

    const toggle = () => {
        setLoggedIn(!loggedIn)
    }
    return (
        <div>
            {
                loggedIn ? (
                <div>
                    <Link to="/home">Home</Link> |
                    <Link to="/setting">Setting</Link> |
                    <Link to="/user/profile">Profile</Link> |
                    <Link to="/user/login" onClick={() => {
                        return (localStorage.removeItem('token'),
                        toggle())
                    }}>Logout</Link>
                </div> ) : (
                <div>
                    <h1>Expensive Budget</h1>
                    <Link to="/user/register">Register</Link> |
                    <Link to="/user/login">Login</Link> 
                </div>
                )
            }
            <Route path="/user/register" component={UserRegister} exact/>
            <Route path="/user/login" render={(props) => {
                return <UserLogin {...props} toggle={toggle} />
            }} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/setting" component={Setting} />
            <PrivateRoute path="/user/profile" component={UserProfile} />
        </div>
    )
}

export default NavBar