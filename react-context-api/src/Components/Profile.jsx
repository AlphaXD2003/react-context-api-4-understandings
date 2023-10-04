import React  , {useContext}from 'react'
import userContext from '../context/UserContext'

export const Profile = () => {
    const {user} = useContext(userContext)
    if(!user) return <h1>Please login</h1>
    return <div>Welcome {user.username}</div>
    
}