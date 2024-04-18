import React, { useContext, useState } from 'react'
import  UserContext  from '../Context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const { setUsers } = useContext(UserContext)
    const HandelSubmit = (e) => {
        e.preventDefault()
        setUsers({ userName, passWord })
    }
    return (
        <div>
            <h1>Login</h1>
            <input
                value={userName}
                onChange={(e) => { setUserName(e.target.value) }}
                type="text" placeholder='UserName' />
            <input
                value={passWord}
                onChange={(e) => { setPassWord(e.target.value) }}
                type="text" placeholder='Password' />
            <button onClick={HandelSubmit}>
                submit
            </button>
        </div>
    )
}

export default Login
