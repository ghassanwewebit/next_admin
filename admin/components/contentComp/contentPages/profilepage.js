import Image from "next/image"
import defaultImage from './../../../../public/img/defaultImage.jpeg'
import Link from "next/link"

export default function   ProfilePageContent(){



    return (
        <>

    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link href="#asdaslllldasd">Home</Link></li>
              <li className="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">

            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                    <Image src={defaultImage} width={150}/>
         
                </div>

                <h3 className="profile-username text-center">Admin</h3>

                <p className="text-muted text-center">Admin user</p>

                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>name</b> <a className="float-right">1,322</a>
                  </li>
                  <li className="list-group-item">
                    <b>email</b> <a className="float-right">543</a>
                  </li>
                  <li className="list-group-item">
                    <b>phone</b> <a className="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
              </div>
            </div>

          
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Change Profile</a></li>
                  <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Working</a></li>
                  <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Other Setting</a></li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="active tab-pane" id="activity">
                  <form className="form-horizontal">
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName2" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label"> New Password</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName2" placeholder=" New Password"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label"> confirm Password</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName2" placeholder=" confirm Password"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> I agree to the <Link href="#12312312">terms and conditions</Link>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

