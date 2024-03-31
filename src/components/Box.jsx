import React from "react";
import { useSelector } from "react-redux";

const Box = () =>{

    const increase = useSelector((state)=>state.increase)
    return(<>
        <h1>box components : {increase}</h1>
    </>)
}

export default Box;