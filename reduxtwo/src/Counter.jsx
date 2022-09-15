import React from "react";
import { increment,decrement } from "./option";
import { useDispatch,useSelector } from "react-redux";
const Counter=()=>{
  const myState=useSelector((state)=>state.changer)
  const dispatch=useDispatch();
    return(
        <>
          <h1>
            {myState}
          </h1>
          <button onClick={()=>dispatch(increment())}>INCRE</button>
          <button onClick={()=>dispatch(decrement())}>DECRE</button>
        </>
    )
      
    
}
export default Counter;