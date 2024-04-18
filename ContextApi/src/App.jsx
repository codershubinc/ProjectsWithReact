import { useState } from 'react' 
import  UserContextProvider  from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() { 

  return (
    <UserContextProvider>
      <div className="App">
        <h1>Context API</h1>
       <Login/>
     <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
