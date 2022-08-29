import { useEffect ,useRef} from "react";
import Link from "next/link";
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

export default  function PagesTables(props){
   const toast = useRef(null);
   const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'deleteing page', detail:'page delete successfly', life: 3000});
  }
  const showError = () => {
      toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
  }

   async function deletePageHandler(id){
      const deletepage = await fetch(`/api/admin/addpage`,{
         method:"DELETE",
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(id)
      }).then(res=>{
         if(res.statusText=="OK"){
            showSuccess()
         }
      })
      
      .catch(error => {
          console.error('Error:', error);
          showError()
        });
        console.log("deletepage",deletepage);
   }

   const renderAllPagesHandler=()=>{
      return props.pages?.map(page=>{
         return (
            <tr key={page._id}>
            <td>#</td>
            <td>{page.page_name}</td>
            <td>{page.descriptions}</td>
            <td className="project_progress">{page.Section_number}</td>
            <td className="project-state">{page.header_and_footer}</td>
            <td className="project-actions  d-flex justify-content-around ">
               <button className="btn btn-primary btn-sm" ><i className="fas fa-folder"></i>View </button>
              <Link href={`/admin/dashboard/pages/${page._id}`}   className="btn btn-info btn-sm" >  Edit</Link>
               <button className="btn btn-danger btn-sm" onClick={(e)=>deletePageHandler(page._id)}><i className="fas fa-trash"></i>Delete</button>
            </td>
         </tr>
         )
      })
   }
    return ( 
      <>
      
      <Toast ref={toast} />


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
                   {renderAllPagesHandler()}
                  </tbody>
               </table>
</>

    )
}


