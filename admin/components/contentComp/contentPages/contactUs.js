import Link from "next/link";

export default function ContactUs(){


    return(
      <><section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Contact us</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link href="/admin/ss">Home</Link></li>
                  <li className="breadcrumb-item active">Contact us</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
            <div className="card">
                <div className="card-body row">
                <div className="col-5 text-center d-flex align-items-center justify-content-center">
                    <div className="">
                    <h2>wewebit<strong></strong></h2>
                    <p className="lead mb-5">123 Testing Ave, Testtown, 9876 NA<br/>
                        Phone: +1 234 56789012
                    </p>
                    <Link href='/admin/dashboard/Profile'>Profile </Link>
                    </div>
                </div>
                
                <div className="col-7">
                    <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" id="inputName" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputEmail">E-Mail</label>
                    <input type="email" id="inputEmail" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputSubject">Subject</label>
                    <input type="text" id="inputSubject" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputMessage">Message</label>
                    <textarea id="inputMessage" className="form-control" rows="4"></textarea>
                    </div>
                    <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Send message"/>
                    </div>
                </div>
                </div>
            </div>
         </section>
         </>
        
    )
}