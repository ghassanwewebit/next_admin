import React ,{useRef,useState}from "react";
import useRouter from 'next/router'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import {authAutions} from '../../admin/store/authStore'

import { Toast } from 'primereact/toast';

export default function Login(){
  const [email,setUser]=useState()
  const [password,setPassword]=useState()
  const Router=useRouter
  const dispatch=useDispatch()
  const toast = useRef(null);


  const userinputhandler=(e)=>{
    setUser(e.target.value)
}
const passwordInputHandler=(e)=>{
setPassword(e.target.value)
}


const showSuccess = () => {
  toast.current.show({severity:'success', summary: 'Success login', detail:'welcome back', life: 3000});
}

const showError = () => {
  toast.current.show({severity:'error', summary: 'faild login', detail:'Email / Password Wrong', life: 3000});
}


  const submithanlder= async(e)=>{
    e.preventDefault()

      let data={
        email:email,
        password:password
      }

      const loginApi = await fetch(`https://admin-teal-zeta.vercel.app/api/admin/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(error => {
        console.error('Error:', error);
      });
      let result = await loginApi.json();
      console.log("result")
      console.log("result",result)
      if(result.status===true){
        showSuccess()
        // dispatch(authAutions.login(result.token))
        Router.push('/admin/dashboard')
      }else{
        showError()
      }
  
  }
    return (
      <>

        <div className="hold-transition login-page">
        <Toast ref={toast} />

<div className="login-box">
  <div className="login-logo">
   <Link href="../../index2.html"><b>WEWEBIT</b></Link>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form onSubmit={(e)=>submithanlder(e)}>
        <div className="input-group mb-3"   >
          <input type="email" className="form-control" placeholder="Email" onChange={userinputhandler}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={passwordInputHandler}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" className="mr-2"/>
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </form>

      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
       {/* <Link href="home/kkasdii" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </Link>
       <Link href="#g" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </Link> */}
      </div>

      <p className="mb-1">
       <Link href="forgot-password.html">I forgot my password</Link>
      </p>
      <p className="mb-0">
       <Link href="admin/register" className="text-center">Register a new membership</Link>
      </p>
    </div>
  </div>
</div>
</div>
</>
    )
}