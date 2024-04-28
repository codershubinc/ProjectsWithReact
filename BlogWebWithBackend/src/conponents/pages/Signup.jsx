import React from 'react'
import {Signup as SignupComponent} from '../index'

function Signup() {
  return (
    <div className='py-8'>
        <SignupComponent />
        {console.log("signup clicked")}
    </div>
  )
}

export default Signup