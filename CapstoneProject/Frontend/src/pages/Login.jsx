import React, { useRef } from 'react'
import axios from '../utils/axios'
import './Login.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginHandler = async ()=>{
      
      const username = emailRef.current.value
      const password = passwordRef.current.value
      try {
        const {data} = await axios.post('auth/login', {username,password})
        console.log(data)
        dispatch({type:'SET_USER',payload:data.existingUser})

        navigate('/')

        
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='container'>
        <div className='container-child'><input ref={emailRef} type='text' placeholder='Enter username or emaidId'/></div>
        <div className='container-child'><input ref={passwordRef} typre='password' placeholder='Enter password'/></div>
        <button className='container-child' onClick={loginHandler} >Login</button>
    </div>
  )
}

export default Login