import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
type Props = {

}
type Msg={
  msg:string;
}
const Login:React.FC<Props> = (props: Props) => {
  const [msg,setMsg]=useState('');
  const { register, handleSubmit, resetField } = useForm();
  
  const submitForm=async(data:any)=>{
      const {email,pass}=data;
      if(email==='' || pass ===''){
        setMsg('All fields are mandatory');
      }
      else{
        await axios.post('http://localhost:5000/user/login',{
          email,pass
        }).then((res)=>console.log(res.data)
        ).catch(err=>console.log(err)
        )
      }
              }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label className='text-sm'>Email:</label>
      <input className='form-control ' {...register('email')} type='email' placeholder='test@test.com'/>
      <label className='text-sm'>Password:</label>
      <input className='form-control  bt-3' {...register('pass')}  type='password' placeholder='Enter your password'/>
      <input className='btn btn-primary mt-3' type='submit'/>
    </form>
  )
}

export default Login