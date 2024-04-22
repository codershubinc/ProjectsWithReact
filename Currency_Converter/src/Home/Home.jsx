import React, { useEffect, useState } from 'react'

function Home() {
        const [data, setData] = useState([])

        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{}.json`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                })
    }, [])
    console.log(data);

    return (
        <div>
            <h1>  {data} </h1>
        </div>
    )
}

export default Home
