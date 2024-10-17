import React from 'react'
import { useState } from 'react';

function MultiForm() {
    // const userdetails1={name:"johns",gender:"male"}
    const[userdetails,setuserdetails]=useState({name:"",email:"",password:""})

    const getuserdetails= (e)=>{
      setuserdetails({...userdetails,[e.target.name]:[e.target.value]})

    }
  return (
    <div>
      <lable>Name</lable><br/>
      <input type="text" name="name" onChange={getuserdetails}/><br/>
      <lable>Email</lable><br/>
      <input type="email" name="email" onChange={getuserdetails} /><br/>
      <lable>Password</lable><br/>
      <input type="password" name="password" onChange={getuserdetails}/><br/>
      {(userdetails.name === "" )
      ? <p>No Details</p>:
      <div>
        <p>{userdetails.name}</p>
         <p>{userdetails.email}</p>
        {/* <p>{userdetails.password}</p>   */}
        
      </div>}
    </div>
  )
}

export default MultiForm