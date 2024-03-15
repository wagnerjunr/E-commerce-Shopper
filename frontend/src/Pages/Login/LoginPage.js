import React, { useState } from 'react'
import './style/loginpage.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [formData,setFormData] = useState({
      email:"",
      password:""
    })

    const changeHandler = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

  const Login = async()=>{
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
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
    <div className='login-page'>
      <div className='login-acess'>
        <h1>Login</h1>
        <input onChange={changeHandler} value = {formData.email} type='email' name='email' placeholder='Digite seu email'></input>
        <input onChange={changeHandler} value = {formData.password} type='password' name='password' placeholder='Senha'></input>
        <button onClick = {Login} className='login-btn'>ENTRAR</button>

        <Link to = '/'> <p1>Esqueci minha senha</p1> </Link>
        <p1>Não tem uma conta? <Link to='/signup'><span className='creat-cont'>Criar Conta</span></Link></p1>
      </div>
    </div>
  )
}

export default LoginPage;

<section className='login-contract'>
  {/* <input type='checkbox' name='contract' id='login-accept'></input>
<label htmlFor='login-accept'>Li e aceito a Política de Privacidade e os Termos de Uso</label> */}
        </section>
