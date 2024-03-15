import React, { useState } from 'react'
import './style/register.css'
import { Link } from 'react-router-dom';


const Register = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
      })
  
      const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
  
    const Signup = async()=>{
        console.log(formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((res)=>res.json()).then((data)=>responseData = data)

            if(responseData.success){
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace("/");
            }else{
                alert(responseData.errors);
            }
    }

  return (
    <div className='signup-page'>
    <div className='signup-account'>
      <h1>Login</h1>
      <input onChange={changeHandler} value = {formData.name} type='email' name='name' placeholder='Digite seu nome'></input>
      <input onChange={changeHandler} value = {formData.email} type='text' name='email' placeholder='Digite seu email'></input>
      <input onChange={changeHandler} value = {formData.password} type='password' name='password' placeholder='Senha'></input>
      <button onClick={Signup} className='login-btn'>ENTRAR</button>
      <p1>Já tem uma conta? <Link to='/login'><span className='creat-cont'>Entrar</span></Link></p1>
      
    </div>
  </div>
  )
}

export default Register