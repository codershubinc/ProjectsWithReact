import React , {useContext} from 'react'
import  UserContext  from '../Context/UserContext'

function Profile() {
    const {users} = useContext(UserContext)
   
    if (!users) return <div>Please Login</div>
    return <div>Welcome {users.userName}</div>
}

export default Profile
