
import PagesTables from "./page"

export default function AllPages(){



    return (

<section className="content-header">
   <div className="container-fluid">
      <div className="row mb-2">
         <div className="col-sm-6">
            <h1>Add Page</h1>
         </div>
         <div className="col-sm-6 mb-5">
            <ol className="breadcrumb float-sm-right">
               <li className="breadcrumb-item"><a href="#">Pages</a></li>
               <li className="breadcrumb-item active">All Pages</li>
            </ol>
         </div>
      </div>
      <section className="content">
         <div className="card">
            <div className="card-header">
               <h3 className="card-title">Projects</h3>
               <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times"></i>
                  </button>
               </div>
            </div>
            <div className="card-body p-0">
               <PagesTables/>
            </div>
         </div>
      </section>
   </div>
</section>
           
    )
}