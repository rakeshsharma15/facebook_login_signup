import React, { useReducer } from 'react'
import { Modal } from "react-bootstrap";
import styles from '../styles/signupmodal.module.css'

const reducer=(state,action)=>{
  switch(action.type){
    case 'F_NAME':
      return { ...state,firstName:action.payload.fname}
    case 'L_NAME':
      return { ...state,lastName:action.payload.lname}
    case 'MOBILE_EMAIL':
      return { ...state,mobileOrEmail:action.payload.number}  
    case  'PASSWORD':
      return { ...state,password:action.payload.passord} 
    case 'DAY':
      return {...state,selectedDay:action.payload.day}   
    case 'MONTH':
      return {...state,selectedMonth:action.payload.month} 
    case 'YEAR':
      return {...state,selectedYear:action.payload.year}
    default:
      return state
  }

}


const useSignUp=()=>{
  const [state,dispatch] = useReducer(reducer,{
    firstName:'',
    lastName:'',
    mobileOrEmail:'',
    password:'',
    gender:'',
    months:['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
    selectedDay:'1',
    selectedMonth:'Jan',
    selectedYear:'2022'
  })
   
  const setFName=(e)=>{
     dispatch({'type':'F_NAME',payload:{fname:e.target.value}})
  }
  const setLName=(e)=>{
    dispatch({'type':'L_NAME',payload:{lname:e.target.value}})
  }

  const setNumber=(e)=>{
    dispatch({'type':'MOBILE_EMAIL',payload:{number:e.target.value}})
  }

  const setPassword=(e)=>{
    dispatch({'type':'PASSWORD',payload:{passord:e.target.value}})
  }

  const gender=(e)=>{
    dispatch({'type':'GENDER',payload:{gender:e.target.value}})
  }
  const selectDay=(value)=>{
     dispatch({'type':'DAY',payload:{day:value}})
  }
  const selectMonth=(value)=>{
    dispatch({'type':'MONTH',payload:{month:value}})
  }
  const selectYear=(value)=>{
    dispatch({'type':'YEAR',payload:{year:value}})
  }

   return [state , {setFName,setLName,setNumber,setPassword,gender,selectDay,selectMonth,selectYear}]
}
const SignUpModal = ({unActiveModal,active}) => {
  const [state,{setFName,setLName,setNumber,setPassword,selectDay,selectMonth,selectYear}] = useSignUp()
  return (
    <div>
      {/* <button onClick={openModal}>open</button> */}
      <Modal
        show={active}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="sm"
        centered
        onHide={unActiveModal}
        className={[styles["background"]]}
      >
        {/* <Modal.Header closeButton /> */}

        <Modal.Body className={[styles["footer-model"]]}>
        <div className={[styles["header"]]}>
        <div className={[styles['sign-up-header'], ""].join(" ")}>
          <h2>Sign Up</h2>
          <p>It's quick and easy.</p>
        </div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/C6QZ-pcv3Bd.png" alt='' onClick={()=>unActiveModal()}/>
        </div>
        <div className={[styles['input-fields'],"container-fluid"].join("")}>
            <div className={[styles['fields'], "row"].join(" ")}>
                <div className={[styles['input-field-input'], "col-md-6"].join(" ")}>
                  <input type="text" placeholder='First name' value={state.firstName}  onChange={(e)=>setFName(e)}/>
                </div>
                <div className={[styles['input-field-input'], "col-md-6"].join(" ")}>
                  <input type="text" placeholder='Surname' value={state.lastName}  onChange={(e)=>setLName(e)}/>
                </div>
            </div>
            <div className={[styles['fields'], "row"].join(" ")}>
                <div className={[styles['input-field-email'], "col-md-12"].join(" ")}>
                  <input type="email" placeholder='Mobile number or email address' value={state.mobileOrEmail} onChange={(e)=>setNumber(e)}/>
                </div>
            </div>
            <div className={[styles['fields'], "row"].join(" ")}>
                <div className={[styles['input-field-email'], "col-md-12"].join(" ")}>
                  <input type="password" placeholder='Password' onChange={(e)=>setPassword(e)} value={state.passord}/>
                </div>
            </div>
            <div className={[styles['fields'], "row"].join(" ")}>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                <label for="cars">Date of birth:</label>
                    <select name="cars" id="cars" onChange={(e)=>selectDay(e.target.value)}>
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                    {Array(30).fill(0).map((x,y)=>{
                     return <option value={y+1}>{y+1}</option>
                    })}
                    </select>
                </div>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                    <select name="cars" id="cars" onChange={(e)=>selectMonth(e.target.value)}>
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                     {state.months.map((x,y)=>{
                     return <option value={x}>{x}</option>
                    })}
                    </select>
                </div>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                    <select name="cars" id="cars" onChange={(e)=>selectYear(e.target.value)}>
                    {Array(122).fill(0).map((x,y)=>{
                     return <option value={2022-y}>{2022-y}</option>
                    })}
                    </select>
                </div>
            </div>
            <div className={[styles['fields'], "row"].join(" ")}>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                <label for="cars">Gender</label>
                    <span>
                      Female
                      <input type="radio" name="gender" value="Female" />
                    </span>
                </div>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                <span>
                      Male
                      <input type="radio" name="gender" value="Male"/>
                    </span>
                </div>
                <div className={[styles['input-field-select-option'], "col-md-4"].join(" ")}>
                <span>
                       Custom
                      <input type="radio" name="gender" value="Custom"/>
                    </span>
                </div>
            </div>
            <div>
            <div className={[styles['container-information'], "container-fluid"].join(" ")}>
                <div class="row">
                    <div className={[styles['information'], "col-sm"].join(" ")}>
                     <p>People who use our service may have uploaded your contact information to Facebook.<span>Learn more.</span></p>
                    </div>
                </div>
                <div class="row">
                <div className={[styles['information'], "col-sm"].join(" ")}>
                     <p>By clicking Sign Up ,you agree to our <span>Terms, Privacy Policy</span> and <span>Cookies Policy</span>. You may recieve SMS notification from us and can opt out at any time.</p>
                </div>
            </div>
            <div className={[styles['btn-signup'], ""].join(" ")}><button>Sign Up</button></div>
            </div>
            </div>
        </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SignUpModal