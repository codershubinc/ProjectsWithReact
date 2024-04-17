import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    //There is anather method to call api in react optimized way
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/CodersHub-in')
    //         .then(response => response.json())
    //         .then(data => {
               
    //             setData(data)
    //         })
    // })
    return (

        <div className='text—center m—4 Obg—gray—600 text—white p—4 text—3xl'> Github followers:
            {data.followers} </div>

    )
}

export default Github


//here is this another method to call api in react

export const GithubLoader = async () => {
    const response = await fetch('https://api.github.com/users/CodersHub-in')
    const data = await response.json()
    return data
}