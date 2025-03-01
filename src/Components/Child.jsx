import React from "react";

function Child(props){
    return(
        <>
     <div>This is child component</div>
     <div>This data is from child component-{props.data}</div>
     </>
    )
}

export default Child;