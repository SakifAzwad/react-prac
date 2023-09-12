import { useEffect, useState } from "react"
import './Users.css'
import User from "./User";
export default function Users()
{
    let [pp,qq]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(x=>x.json())
        .then(y=>qq(y))

    },[]);

    return(
        <div className="box">
            <h3>Users : {pp.length}</h3>
            {
                pp.map(zz=><User xx={zz}></User>)
            }
        </div>
    )
}