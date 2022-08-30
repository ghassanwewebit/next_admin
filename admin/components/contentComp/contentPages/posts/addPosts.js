import Link from "next/link"
import React, { useState, useEffect ,useRef} from 'react';
import { useSelector } from "react-redux";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';



export default function AddPosts(props){


    const [postName, setPostName] = useState('');
    const [postDetails, setPostDetails] = useState('');
    const [pageName, setPageName] = useState('');
    const [sectionsName, setSectionsName] = useState('');
    const [postStatus,setPostStatus]=useState('')
    const [pagesName,setPagesName]=useState([])
    const toast=useRef()
    const currentUser=useSelector(state=>{state})
    console.log("currentUser",currentUser)

    useEffect(()=>{
        const pageProps=[]
        const getPagesNameFromPRops= props.pages.map(page=>{
        pageProps.push({label:page.page_name, value:page.page_name})

    })
    setPagesName( pageProps)
},[props.pages])


    const postStatusOptins=[
        {label:"Active" ,value:"active"},
        {label:"not Active",value:"not active"}
    ]
    const onPageNameChange = (e) => {
        e.preventDefault()
        console.log("asdasdasdassdasaddsasadsads",e.value)
        setPageName(e.value);
      }
      const onPostStatusChange=(e)=>{
        e.preventDefault()
        setPostStatus(e.value)
      }
    // const toast =useRef('')

    // const onUpload = (e) => {
    //     console.log(e)
    //     toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    //   }
      
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Add post', detail:'post add successfly', life: 3000});
    }
      
      const showError = () => {
        toast.current.show({severity:'error', summary: 'Add post', detail:'failed to add this post', life: 3000});
    }




      const addpageSubmitHandler =async(e)=>{

        e.preventDefault();
        const currentpageForPosts=props.pages.filter(page=>page.page_name===pageName)
        let data={
          post_name:postName,
          post_details:postDetails,
          section_name:sectionsName,
          post_Status:postStatus,
          page_id:currentpageForPosts[0]._id,
          date :new Date().toISOString()
        }
       if(postName  && sectionsName && postStatus && pageName){
        const loginApi = await fetch(`/api/admin/posts/addposts`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).catch(error => {
          console.error('Error:', error);
          showError()
        });
        let result = await loginApi.json();
        if(result.success===true){
            showSuccess()
          console.log(result);
        }else{
        }
      }
      
      
      }

      const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-plus'};
      const uploadOptions = {label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success'};
      const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: ''};
    return (
            <section className="content-header">
            <Toast ref={toast} />

            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Add posts page</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            <Link href="/admin/dashboard">
                            Home</Link>
                        </li>
                        <li className="breadcrumb-item active">Add posts</li>
                        </ol>
                    </div>
                </div>
                <div className=" container-fluid  mt-5 contact-form">
                    <div className="w-100 m-auto">
                        <form onSubmit={(e)=>addpageSubmitHandler(e)}>
                        <div className="row">
                            <div className="col-lg-6 col-12 px-4 py-2 d-flex justify-content-start align-items-start  flex-column">
                                <label id="post-name" htmlFor="Post-name" className="form-label mr-5">Post Name:</label>
                                <input type="text" className="form-control w-100 py-4 px-3 rounded" id="Post-name" aria-describedby="emailHelp"
                                    placeholder="Enter Post Name" onChange={(e) => setPostName(e.target.value)} value={postName} required/>
                            </div>
                            <div className="col-lg-6 col-12 px-4 py-2 d-flex justify-content-start align-items-start  flex-column">
                                <label  htmlFor="name-of-sections" className="form-label mr-5">Sections Name</label>
                                <input type="text" className="form-control w-100 py-4 px-3 rounded" id="name-of-sections" aria-describedby="emailHelp"
                                    placeholder="Enter Sections Name " onChange={(e) => setSectionsName(e.target.value)} value={sectionsName} required/>
                            </div>
                            <div className="col-lg-6 col-12 px-4 py-2  d-flex justify-content-start align-items-start  flex-column">
                                <label  htmlFor="pagedName" className="form-label mr-5"> Page name</label>
                                <Dropdown className='w-100' id="pagesName"  value={pageName} options={pagesName} onChange={(e)=>onPageNameChange(e)}  placeholder="Select a type"  />
                            </div>
                            <div className="col-lg-6 col-12 px-4 py-2  d-flex justify-content-start align-items-start  flex-column">
                                <label htmlFor="Post-status" className="form-label mr-5"> post Status</label>
                                <Dropdown id="Post-status" className='w-100' value={postStatus} options={postStatusOptins} onChange={(e)=>onPostStatusChange(e)}  placeholder="Select Post status"  />
                            </div>
                            <div className="col-12 w-100 px-4 py-2">
                                <label htmlFor="post-upload" className="form-label mr-5">Post Files</label>
                                <div className="card">
                                    <FileUpload name="image" id="post-upload" chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions}
                                     
                                    emptyTemplate={
                                    <p className="m-0">Drag and drop files to here to upload.</p>
                                    }  accept="image/*" maxFileSize={10000000}
                                      />
                                </div>
                            </div>
                            <div className="col-12 px-4 py-2 w-100">
                                <label htmlFor="post-Descriptions" className="form-label mr-5">Post Descriptions:</label>
                                <div className="card">
                                    <InputTextarea  className="w-100" rows={5} id="post-Descriptions" placeholder="Enter your post Details" value={postDetails} onChange={(e) =>
                                    setPostDetails(event.target.value)} />
                                </div>
                            </div>
                           
                        </div>

                            <div className='my-5 container d-flex justify-content-end align-items-center'>
                             <Button label="Add posts" type='submit' className="p-button-raised p-button-secondary"  />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>

    )
}