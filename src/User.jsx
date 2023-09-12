export default function User({xx})
{
    let {name,email}=xx;
    return(
        <div className="box"> 
            <h4>Name : {name}</h4>
            <p>Email : {email} </p>
        </div>
    )
}