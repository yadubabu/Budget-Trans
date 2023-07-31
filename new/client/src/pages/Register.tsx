import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import User from '../../../client/modals/User';

type Props = {}



const Register = (props: Props) => {
  const [msg,setMsg]=useState('');
  const [user,setUser]=useState<User>();
  const { register, handleSubmit, resetField } = useForm();

const submitForm=async(data:any)=>{
  
 const {name,email,password,confirmpassword,pancard,phone}=data;
 if(!name || !email || !password || !confirmpassword || !phone || !pancard){
  setMsg('All Fields are mandatory');
 }
await axios.post("http://localhost:5000//user/adduser", {
    name:name,
    email: email,
    password:password,
    confirmpassword:confirmpassword,
    pancard:pancard,
    phone: phone,
    
  }).then((res=>console.log(res.data)
  )).catch(err=>console.log(err)
  )
}
  return (
    
<form className='p-3' onSubmit={handleSubmit(submitForm)}>
{msg ? <div className='text-danger h2'>{msg}</div>:''}

<label className='text-sm'>Name:</label>
      <input className='form-control ' {...register('name')} type='text' placeholder='Enter your Name'/>
      <label className='text-sm'>Email:</label>
      <input className='form-control ' {...register('email')} type='email' placeholder='test@test.com'/>
      <label className='text-sm'>Password:</label>
      <input className='form-control ' {...register('password')} type='password' placeholder='enter your password'/>
      <label className='text-sm'>ConfirmPassword:</label>
      <input className='form-control ' {...register('confirmpassword')} type='password' placeholder='Retype your password'/>
      <label className='text-sm'>Pancard:</label>
      <input className='form-control ' {...register('pancard')} type='text' placeholder='Enter your pancard'/>
      <label className='text-sm'>Phone:</label>
      <input className='form-control ' {...register('phone')} type='number' placeholder='Enter your phone number'/>
      <input className='btn btn-primary mt-3' type='submit'/>
    </form>  )
}
export default Register;