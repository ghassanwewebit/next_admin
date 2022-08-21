
import Link from "next/link"

export default function Register(){

    return(

        <div className="hold-transition register-page">
         <div className="register-box">
        <div className="register-logo">
          <Link href="../../index2.html"><b>WEWEBIT</b></Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full name"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary ">
                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" className="mr-2"/>
                    <label htmlFor="agreeTerms">
                    I agree to the<Link href="#asdasd">terms</Link>
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
             {/* <Link href="#a21home" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i>
                Sign up using Facebook
              </Link> */}
             {/* <Link href="#12312" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Sign up using Google+
              </Link> */}
            </div>

            <Link href="/admin" className="text-center">I already have a membership</Link>
          </div>
  </div>
</div>
        </div>
    )
}