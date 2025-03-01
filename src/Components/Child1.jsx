import React from "react";

function Child1(props){
    const c = props.data1;
    const d = props.data2;
    return(
        <>
        <div>Addition: {c+d}</div>
        <div>Multiplication:{c*d}</div>
        <div>Subraction: {c-d}</div>
        <div>Division: {c/d}</div>
        <div>Modulus: {c%d}</div>

        </>
    )
        
    
}
export default Child1;