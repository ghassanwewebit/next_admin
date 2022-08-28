
import Link from "next/link"
import { useRef } from "react"
import { Toast } from 'primereact/toast';
import { useRouter } from "next/router";


export default function Register(){

  const nameRef=useRef()
  const passwordRef=useRef()
  const emailRef=useRef()
  const agreeRef=useRef()
  const confirmPasswordRef=useRef()
  const toast = useRef(null);
  const Router=useRouter()

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success Regester', detail:`welcome ${nameRef.current.value}`, life: 3000});
  }
  
  const showError = (message) => {
    toast.current.show({severity:'error', summary: 'Faild Regstier', detail:message, life: 3000});
  }
  const registerUsersHandler= async(e)=>{
    e.preventDefault();
    const name=nameRef.current.value
    const password=passwordRef.current.value
    const email=emailRef.current.value
    const agree=agreeRef.current.value
    const confirmPassword=confirmPasswordRef.current.value
    if( confirmPassword ===password){
       let data ={
        name,
        password,
        email,
        agree
       }
       
      const loginApi = await fetch(`http://localhost:3000/api/admin/register`, {
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
      if(result.success===true){
        showSuccess()
        Router.push('/admin')
      }else{
        showError(result.message)
      }
      }else{

      }
}

    return(

        <div className="hold-transition register-page">
            <Toast ref={toast} />
         <div className="register-box">
        <div className="register-logo">
          <Link href="../../index2.html"><b>WEWEBIT</b></Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={(e)=>registerUsersHandler(e)} >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full name" ref={nameRef}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" ref={emailRef}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" ref={passwordRef}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm password" ref={confirmPasswordRef}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary ">
                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" className="mr-2" ref={agreeRef}/>
                    <label htmlFor="agreeTerms">
                    I agree to the <Link href="#asdasd"> terms </Link>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
             <Link href="#a21home" className="btn btn-block btn-primary">
              <a className="btn btn-block btn-primary">

                <i className="fab fa-facebook mr-2"></i>
                Sign up using Facebook
                </a></Link>
             <Link href="#12312" className="btn btn-block btn-danger">
             <a className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Sign up using Google+
                </a></Link>
            </div>

            <Link href="/admin" className="text-center">I already have a membership</Link>
          </div>
  </div>
</div>
        </div>
    )
}