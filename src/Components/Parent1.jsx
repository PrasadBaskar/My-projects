import React from "react";
import Child1 from "./Child1";

function Parent1(){
const a = 5;
const b = 5;
    return(
        <>
        <Child1 data1 = {a} data2 = {b}></Child1>
        </>
    )
}
export default Parent1;