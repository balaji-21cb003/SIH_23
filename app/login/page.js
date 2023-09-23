"use client"
import Link from 'next/link'
import React from 'react'
export default function Login() {

    const handdleSubmit=()=>{

    }
    const handdleSignUp=()=>{

    } 
    return(
        <div>
      <form className='container'>
        <h1 className='heading'>LOGIN</h1>
        <input 
          type='email' 
        //   value={data.email} 
        //   onChange={(e)=>setData({...data,email:e.target.value})} 
          placeholder='Email'
        />
        <input 
          type='password' 
        //   value={data.password} 
        //   onChange={(e)=>setData({...data,password:e.target.value})}
          placeholder='Password'
        />
        <button className='btn' onClick={handdleSubmit}>Login</button>
        <h6>Dont have an account ?</h6>
        <Link href={'/signup'}>
        <button className='btn_ls' onClick={handdleSignUp}>SignUp</button>
        </Link>
      </form>
    </div>
    )
};
