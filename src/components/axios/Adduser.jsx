import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Adduser() {

    const navi = useNavigate()

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState(0);
    const[username,setUsername] = useState('');
    const[Password,setPassword] = useState('');


    //add user
    function addmember(){
        axios.post('https://654c8c5f77200d6ba858fc38.mockapi.io/SmapleCollection',{
            Name:name,Email:email,Phone:phone,Username:username,Password:Password
        })
        .then(alert('data added'))
        .catch(err=>{console.log(err);})

        navi('/');
    }
  return (
    <div>
        <form>
            <label htmlFor="" className='form-label'>Name</label>
            <input type="text" className='form-control' onChange={(e)=>{
                setName(e.target.value)
            }}/>

            <label htmlFor="" className='form-label'>Email</label>
            <input type="email" className='form-control' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>

            <label htmlFor="" className='form-label'>Phone</label>
            <input type="number" className='form-control'onChange={(e)=>{
                setPhone(e.target.value)
            }}/>

            <label htmlFor="" className='form-label'>Username</label>
            <input type="text" className='form-control' onChange={(e)=>{
                setUsername(e.target.value)
            }}/>

            <label htmlFor="" className='form-label'>Password</label>
            <input type="password" className='form-control' onChange={(e)=>{
                setPassword(e.target.value)
            }}/>

            <br />
            <br />

            <Link to={'/'} className='btn btn-danger'>Cancle</Link>
            <button type='submit' className='btn btn-dark' onClick={addmember}>Submit</button>
        </form>
    </div>
  )
}
