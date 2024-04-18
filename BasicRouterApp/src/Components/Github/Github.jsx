import React, { useEffect } from "react";
// import { useLoaderData } from "react-router-dom"; 
import { useState } from "react";
import { useParams } from "react-router-dom";
function Github() {
    const {iid} = useParams(); 
    // There is another method to call api in react optimized way
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/'+ (iid ? iid : 'CodersHub-in') )
            .then(response => response.json())
            .then(data => {

                setData(data)
            })
    })
    return (
        <div className="h-[60vh] flex w-[90%]  justify-start border-2 border-solid border-stone-800 rounded-3xl m-auto   shadow-2xl" > 
        <img className="w-[200px] h-[200px] rounded-full  m-auto  "  src={data.avatar_url} alt="" />
            <div className="text-3xl flex flex-col m-auto">
                <p>Github name: {data.login}</p>
               <p>Github followers: {data.followers}</p> 
            </div>
        </div>
    );
}

export default Github;

//here is this another method to call api in react
// export const GithubLoader = async ( ) => {
    
//     const response = await fetch(`https://api.github.com/users/CodersHub-in`);
//     const data = await response.json();
//     return data;
// };
