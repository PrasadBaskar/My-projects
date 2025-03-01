import React, { useState, useRef } from 'react'

const Ref = () => {

   const [statecount, setStateCount] = useState(0);

   const IncreaseCount = ()=>{
    setStateCount(statecount+1);
   }

   const IncreaseRef = ()=>{
    RefCount.current = RefCount.current+1;
   }

   const RefCount = useRef(0);

  return (
    <div>
        <p>State count value: {statecount}</p>
        <button onClick={()=> IncreaseCount()}>Incrementing state count</button>
        <p>Reference Count: {RefCount.current}</p>
        <button onClick={()=> IncreaseRef()}>Incrementing Ref count</button>
       
    </div>
  )
}

export default Ref