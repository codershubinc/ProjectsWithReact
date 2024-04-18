import React, { useEffect } from "react";
// import { useLoaderData } from "react-router-dom"; 
import { useState } from "react";
import { useParams } from "react-router-dom";
function Github() {
    const {iid} = useParams(); 
    // There is another method to call api in react optimized way
    const [data, setData] = useState([])
        useEffect(() => {
            // Execute the API call only on initial page load
            if (iid) {
                fetch(`https://api.github.com/users/${iid}`)
                    .then(response => response.json())
                    .then(data => {
                        setData(data);
                    });
            }
        }, []);
   
    return (
        <div className=" min-h-[70vh]  h-max flex w-[90%] flex-wrap border-2 border-solid border-stone-800 transition-all rounded-3xl m-auto   shadow-inner shadow-slate-500 "> 
        <img className="w-[200px] h-[200px] rounded-full  m-auto  "  src={(data.avatar_url ? data.avatar_url : "https://cdn-icons-png.flaticon.com/512/1051/1051326.png")} alt="" />
            <div className="text-3xl flex flex-col m-auto">
                <p>Github name: {(data.login ? data.login : "Not Available")}</p>
               <p>Github followers: {(data.followers ? data.followers : "Not Available")}</p> 
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
