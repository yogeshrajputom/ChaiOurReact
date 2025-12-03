import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId} = useParams();
    return(
        <>
        <div className=" bg-amber-300 text-center text-4xl">User: {userId}</div>
        </>
    )
}

export default User;