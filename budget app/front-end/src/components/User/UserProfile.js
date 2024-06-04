import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { startGetUser } from '../../actions/userAction'

const UserProfile = (props) => {
    const user = useSelector((state) => {
        return state.user
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetUser())
    }, [dispatch])

    return (
        <div>
            {
                Object.keys(user).length > 0 && (
                    <div>
                        <h2>User Profile</h2>
                        <p>Name : {user.profile.name}</p>
                        <p>Email : {user.email}</p>
                        <p>Occupation : {user.profile.occupation}</p>
                        <p>CreatedAt : {user.createdAt.slice(0,10).split('-').reverse().join('-')}</p>
                        <p>Time : {user.createdAt.slice(11,19)}</p>
                    </div>
                )
            }
        </div>
    )
}

export default UserProfile