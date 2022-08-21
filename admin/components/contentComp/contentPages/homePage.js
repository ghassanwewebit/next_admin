
import Link from "next/link"
export default function HomePageContent(){

    return (

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>home page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link href="#ww">Home</Link></li>
                  <li className="breadcrumb-item active"></li>
                </ol>
              </div>
            </div>
          </div>
        </section>


    )
}