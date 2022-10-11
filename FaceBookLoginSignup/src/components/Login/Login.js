import React,{useReducer} from 'react'
import styles from '../styles/login.module.css'
import SignUpModal from './SignUpModal'


const reducer=(state,action)=>{
   switch(action.type){
    case 'SET_EMAIL':
        return {...state,email:action.payload.email}
    case 'SET_PASSWORD':
        return {...state,password:action.payload.password}
    case 'MODAL_ACTIVE':
        return {...state,active:true}    
    case 'MODAL_UNACTIVE':
            return {...state,active:false}        
        default:
            return state      
   }
}

function useLogin(){
    const [state,dispatch] = useReducer(reducer,{email:'',password:'',active:false})

    const setEmail=(value)=>{
          dispatch({'type':'SET_EMAIL' ,payload:{email: value}})
    }

    const setPassword=(value)=>{
        dispatch({'type':'SET_PASSWORD' ,payload:{password:value}})
    }

    const activeModal=()=>{
        dispatch({'type':'MODAL_ACTIVE'})
    }

    const unActiveModal=()=>{
        dispatch({'type':'MODAL_UNACTIVE'})
    }

    return [state,{setEmail,setPassword,activeModal,unActiveModal}]
}
const Login = () => {
    // const [state,dispatch] = useReducer(reducer,{email:'',password:''})
    const [state,{setEmail,setPassword,activeModal,unActiveModal}] = useLogin()
  return (
    <div className={[styles['container'], " "].join(" ")}>
        <div className={[styles['login-system'], "container-fluid"].join(" ")}>
            <div className={[styles['login-system-row'], "row"].join(" ")}>
                <div className={[styles['outer'], "col-md-6"].join(" ")}> 
                        <div className={[styles['facebook-p'], ""].join(" ")}>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                        <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                </div>
                <div className={[styles['facebook-login-system'], "col-md-6"].join(" ")}>
                    <div className={[styles['facebook-login-input'], ""].join(" ")}>
                        <input type="text" placeholder='Email address or phone number' value={state?.email} onChange={(e)=>setEmail(e.target.value)} autoFocus="1"/>
                        <input type="text" placeholder='Password' value={state.password} onChange={(e)=>setPassword(e.target.value)} autoFocus="1"/>
                        <button className={[styles['facebook-login-button-first'], ""].join(" ")}>Log in </button>
                        <a href='#'>Forgotten password?</a>
                        <div className={[styles['line'], ""].join(" ")}></div>
                        <button className={[styles['facebook-login-button-second'], ""].join(" ")} onClick={()=>activeModal()}>Create New Account</button>
                    </div>
                    <div className={[styles['facebook-create-page'], ""].join(" ")}><span>Create a Page </span>for a celebrity, brand or business.</div>
                </div>
            </div>
        </div>
        <div className={[styles['footer'], " "].join(" ")}>
            <div className={[styles['language'], " "].join(" ")}>
             <ul>
                <li>English (UK)</li>
                <li>ਪੰਜਾਬੀ</li>
                <li>हिन्दी</li>
                <li>मराठी</li>
                <li>ગુજરાતી</li>
                <li>বাংলা</li>
                <li>தமிழ்</li>
                <li>తెలుగు</li>
                <li>ಕನ್ನಡ</li>
                <li>മലയാളം</li>
                <i className="fa fa-plus" aria-hidden="true"></i>
             </ul>
             <div className={[styles['line2'], ""].join(" ")}></div>
             <ul>
                <li>Sign up</li>
                <li>Log in </li>
                <li>Messenger</li>
                <li>Facebook Lite</li>
                <li>Watch</li>
                <li>Places</li>
                <li>Games</li>
                <li>Marketplace</li>
                <li>Facebook Pay</li>
                <li>Oculus</li>
                <li>Portal</li>
                <li>instagram</li>
                <li>Bulletin</li>
                <li>Local</li>
             </ul>
             <ul>
                <li>Fundraisers</li>
                <li>Services</li>
                <li>Groups</li>
                <li>About</li>
                <li>Create Ad</li>
                <li>Create Page</li>
                <li>Developers</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>AdChoices</li>
                <li>Terms</li>
             </ul>
             <ul>
                <li>Help</li>
                <li>Contact uploading and non-users</li>
             </ul>

             <ul>
                <li>Meta © 2022</li>
             </ul>
            </div>
        </div>
        <SignUpModal unActiveModal={unActiveModal} active={state.active}/>
    </div>
  )
}

export default Login