export default function UsersPage(){



    return (

        <div>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Users</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Users</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content">

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">All Users</h3>

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
          <table className="table table-striped projects">
              <thead>
                  <tr>
                      <th style={{width: "1%"}}>
                          #
                      </th>
                      <th style={{width: "20%"}}>
                          Users Name
                      </th>
                      <th style={{width: "30%"}}>
                       users Email                      
                      </th>
                      <th>
                          Work time
                        </th>
                      <th style={{width: "8%"}} className="text-center">
                          Status
                      </th>
                      <th style={{width: "20%"}}>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                      Admin
                      </td>
                      <td>
                            admin@admin.com
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width:" 57%"}}>
                              </div>
                          </div>
                          <small>
                              57% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right d-flex justify-content-around">
                          <button className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </button>
                          <button className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </button>
                          <button className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </button>
                      </td>
                  </tr>
                 
              </tbody>
          </table>
        </div>
      </div>

    </section>
  </div>


    )
}