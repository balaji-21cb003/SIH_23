"use client"
import React from 'react'
import Link from "next/link";

export default function page() {
    const handdleSubmit=()=>{

    }
    const handdleLogin=()=>{

    }
    return(
        <div>
            <form className='container'>
                <h1 className='heading'>SIGNUP</h1>
                <input 
                type='text' 
                // value={data.name} 
                // onChange={(e)=>setData({...data,name:e.target.value})} 
                placeholder='Name'
                />
                <input 
                type='email' 
                // value={data.email} 
                // onChange={(e)=>setData({...data,email:e.target.value})} 
                placeholder='Email'
                />
                <input 
                type='password' 
                // value={data.password} 
                // onChange={(e)=>setData({...data,password:e.target.value})}
                placeholder='Password'
                />
                <Link href={'/'}>
                    <button className='btn' onClick={handdleSubmit}>Sign up</button>
                </Link>
                <h6 className='do'>Dont have an account ?</h6>
                <Link href={'/login'}>
                    <button className='btn_ls' onClick={handdleLogin}>Login</button>
                </Link>
            </form>
        </div>
    );
};
