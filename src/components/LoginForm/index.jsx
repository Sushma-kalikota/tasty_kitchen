import './index.css'
import logo from '../../assets/logo.svg'
import Cookies from 'js-cookie'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()//when javascript wants to decide when to navigate we use usenavigate when user clicks then if it needs to navigate we use link
  const [errorMsg,setErrorMsg]=useState('')
  const handleUserChange=(event)=>{
    setUsername(event.target.value)
  }

  const handlePassChange=(event)=>{
    setPassword(event.target.value)
  }

  const submitForm=async (event)=>{
    event.preventDefault()
    
    const userDetails={
      username,
      password,
    }

    const url='https://apis.ccbp.in/login'

    const options={
      method:'POST',
      body:JSON.stringify(userDetails)
    }
    //send login info
    const response=await fetch(url,options)
    console.log(response)

    //recieve the responsefrom the server 
    const fetchData=await response.json()//here its converting the fetched result to the response into js object from json to the way that users can see 
    //also it doesnt convert the whole response into the js object it only reads the body and converts
    console.log(fetchData)

    //store the token in the cookie 
    if(response.ok === true){
      Cookies.set('jwt_token',fetchData.jwt_token)
      navigate('/home')
    }else{
      setErrorMsg(fetchData.error_msg)
    }
    

  }
  
  return (
    <div className="login-page">
      <div className="login-left">
        <section className="login-container">

          <div className="login-header">
          <img src={logo}/>
          <h2>Tasty kitchens</h2>
          <h1>Login</h1>
          </div>

          <form className="login_input" onSubmit={submitForm}>

            <label htmlFor="username">USERNAME</label><br/>
            <input type="text" id="username" value={username} onChange={handleUserChange}></input>
            <br/>
            <label htmlFor="password">PASSWORD</label><br/>
            <input type="password" id="password" value={password} onChange={handlePassChange}></input>
            <br/>
            <button>Login</button>
            {errorMsg !== '' && (
              <h3 className="error-msg">{errorMsg}</h3>
            )}
          </form>
        </section>
      </div>
      <div className="login-right">
      </div>
    </div>
  )
}
export default LoginForm