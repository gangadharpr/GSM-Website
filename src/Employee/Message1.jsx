import { useState } from "react";

function Message1 (){
    let [msg,setmsg]=useState("Hello Word")

    let gmHandler=()=>{
        setmsg("Raise up and Shine UP" )
    }
    let gnHandler=()=>{
        setmsg("Take a breath" )
    }
    let gAHandler=()=>{
        setmsg("Go to sleep" )
    }

        return(<>
        <h1>{msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
        <button onClick={gAHandler}>GA</button>
        </>
    )}




export default Message1