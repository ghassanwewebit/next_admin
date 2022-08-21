import { useEffect } from "react";

export default  function PagesTables(props){
    // console.log("props",props.allpaged);

useEffect(()=>{

    const getAllPages =async()=>{
        const getPages=fetch("http://localhost:3000/api/admin/addpage").then(res=>res.json()
        ).then(Data=>{return Data})
        .catch(error => {
            console.error('Error:', error);
          });
          console.log("getPages,", await getPages);
    }

  getAllPages()
},[])

    return (


        <table className="table table-striped projects">
                  <thead>
                     <tr>
                        <th style={{width: "1%"}}>#</th>
                        <th style={{width: "20%"}}>Page Name</th>
                        <th style={{width: "30%"}}>Number Of Sections</th>
                        <th>Descriptions</th>
                        <th style={{width: "8%"}} className="text-center">Header Type</th>
                        <th style={{width: "20%"}}></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>#</td>
                        <td></td>
                        <td></td>
                        <td className="project_progress"></td>
                        <td className="project-state"></td>
                        <td className="project-actions  d-flex justify-content-around ">
                           <a className="btn btn-primary btn-sm" href="#"><i className="fas fa-folder"></i>View </a>
                           <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i> Edit</a>
                           <a className="btn btn-danger btn-sm" href="#"><i className="fas fa-trash"></i>Delete</a>
                        </td>
                     </tr>
                  </tbody>
               </table>
    )
}


// export async function getStaticProps() {
//     console.log("asdasdasdasdasd");

//     const getPages=fetch("http://localhost:3000/api/admin/addpage").then(res=>res.json()
//     ).then(Data=>{return Data})
//     .catch(error => {
//         console.error('Error:', error);
//       });

//     const JsonPages= getPages.body
//     console.log("JsonPages",JsonPages);
//     return {
//       props: {
//         allpaged:JsonPages
//       }, // will be passed to the page component as props
//     }
//   }