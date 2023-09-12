import { useState } from "react"

export default function Count()
{
    let [x,y]=useState(13);

    let add=()=>
    {
        y(x+1);
    }
    let red=()=>
    {
        y(x-1);
    }
    let str=
    {
        border:'2px solid cyan',
        margin:'15px',
        padding:'15px',
        borderRadius:'10px'
    };
    return(
        <div style={str}>
            <h3>Count : {x}</h3>
            <button onClick={add}>ADD</button>
            <button onClick={red}>REDUCE</button>
        </div>
    )
}