import React, { useReducer } from 'react'
import styles from '../styles/facebooklogin.module.css'

const reducer=(state,action)=>{
  switch(action.type){
    case 'SET_EMAIL':
      return {...state,email:action.payload.email}
    case 'SET_PASSWORD':
      return {...state,password:action.payload.password}
    default:
      return state    
  }
}

const useLogin=()=>{
  const [state,dispatch] = useReducer(reducer,{email:'',password:''})

  const setEmail=(value)=>{
    dispatch({type:'SET_EMAIL',payload:{email:value}})
  }

  const setPassword=(value)=>{
    dispatch({type:'SET_PASSWORD',payload:{password:value}})
  }

  return [state,{setEmail,setPassword}]
}

const FacebookLogin = () => {

  const [state,{setEmail,setPassword}] = useLogin()
  return (
    <div className={[styles['container-facebook']]}>
        <div className={[styles['facebook-login-input']]}>
            <input type="text" placeholder='Email Address or phone number' onChange={(e)=>setEmail(e.target.value)} value={state.email} autoFocus="1"/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={state.password} autoFocus="1"/>
            <button className={[styles['facebook-login-button-first']]}>Log in</button>
            < a href='#'>Forgotten password?</a>
            <div className={[styles['line']]}></div>
            <button className={[styles['facebook-login-button-second']]}>Create New Account</button>
        </div>
    </div>
  )
}

export default FacebookLogin