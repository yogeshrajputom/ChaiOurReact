import React, { useEffect, useState } from "react";


const Github = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/yogeshrajputom')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
   return(
    <>
    <div className="text-4xl text-whites flex text-center">
            <img src={data.avatar_url} alt="" />
             <p>GitHub Follower : {data.followers}</p>
    </div>
    </>
   )
}

export default Github;