import React from "react";
import{increment,decrement} from "./action/index"
import { useSelector,useDispatch } from "react-redux";
const IncreDecre=()=>{
    const myState=useSelector((state)=>state.root)
    const dispatch=useDispatch();
    return(
        <>
        <h1>
            {myState}
        </h1>
        <button onClick={()=>dispatch(increment())}>INC</button>
        <button onClick={()=>dispatch(decrement())}>DEc</button>
        </>
    )
}
export default IncreDecre;