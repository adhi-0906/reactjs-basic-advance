import { useState } from 'react';

function SingleForm() {
    const [name,setname]=useState("kasi")
     const[email,setemail]=useState("adhithyaprabhu02@gmail.com")
    return (
        <div>
            <h1>Single form</h1>
            <label>Name</label><br />
            <input type="text" name="name" onChange={(event)=>{setname(event.target.value)}} /><br />
            <label>Email</label><br />
            <input type="text" name="email" onChange={(event)=>{setemail(event.target.value)}} /><br />
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    );
}
export default SingleForm;
