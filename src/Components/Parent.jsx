import React from "react";
import Child from "./Child";
import { useState } from "react";

function Parent(){
    const parentName="UserParent";
    const childName="UserChild";

    const [Count,setCount] = useState(0);
    return(
        <>
     <div>This is parent component</div>
     <div>This data is from parent component - {parentName}</div>
     <div>Number:{Count}</div>
     <button onClick={() => setCount(Count+5)}>change</button>
     <hr></hr>
     <div><Child data={childName}></Child></div>
     </>
    )
}

export default Parent;