

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default function AddpageContent(){
  const [headerAndFooter, setheaderAndFooter] = useState(null);
  const [pageName, setpageName] = useState('');
  const [Descriptions, setDescriptions] = useState('');
  const [SectionNumber, setSectionNumber] = useState('');
  const toast =useRef('')




  const onCityChange = (e) => {
    setheaderAndFooter(e.value);
  }

  const cities = [
    { name: 'origin', },
    { name: 'basic ', },
    { name: 'advance',  },
    { name: 'tipical', },
  ];

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Add page', detail:'page add successfly', life: 3000});
  }
  
  const showError = () => {
    toast.current.show({severity:'error', summary: 'Add page', detail:'failed to add this page', life: 3000});
  }
  
const AddPageSubmitHandler= async(e)=>{
  e.preventDefault();
  
  // console.log("ASdasdasd");
  
// console.log(pageName,Descriptions,SectionNumber,headerAndFooter.name);
  let data={
    page_name:pageName,
    descriptions:Descriptions,
    Section_number:SectionNumber,
    header_and_footer:headerAndFooter?.name,
    date :new Date().toISOString()
  }


 if(pageName || Descriptions || SectionNumber){

  const loginApi = await fetch(`http://localhost:3000/api/admin/addpage`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch(error => {
    console.error('Error:', error);
    showError()
   setpageName('')
   setDescriptions('')
   setSectionNumber('')
  });
  let result = await loginApi.json();
  if(result.success===true){
    showSuccess()
   setpageName('')
   setDescriptions('')
   setSectionNumber('')
    console.log(result);
  }else{
  }
}


}


    return (
    <>
        <Toast ref={toast} />

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item active">Add Page</li>
                  
                </ol>
              </div>

              <div className=" container-fluid  mt-5 contact-form">
                <div className="w-100 m-auto">
                  <form onSubmit={(e)=>AddPageSubmitHandler(e)}>
                    <div className="row">
                    <div className="col-lg-6 col-12 px-4 py-2 d-flex justify-content-start align-items-start  flex-column">
                        <label htmlFor="page-name" className="form-label mr-5">Page Name:</label>
                        <input type="text" className="form-control w-75 py-4 px-3 rounded" id="page-Name" aria-describedby="emailHelp"
                            placeholder="Enter Page Name" onChange={(e) => setpageName(e.target.value)} value={pageName}/>
                       </div> 
                       <div className="col-lg-6 col-12 px-4 py-2 d-flex justify-content-start align-items-start  flex-column">
                        <label htmlFor="number-of-sections" className="form-label mr-5">Number of sections</label>
                        <input type="text" className="form-control w-75 py-4 px-3 rounded" id="number-of-sections" aria-describedby="emailHelp"
                            placeholder="Enter number " onChange={(e) => setSectionNumber(e.target.value)} value={SectionNumber}/>
                       </div> 
                       <div className="col-lg-6 col-12 px-4 py-2  d-flex justify-content-start align-items-start  flex-column">
                        <label htmlFor="Descriptions" className="form-label mr-5">Descriptions:</label>
                        <input type="text" className="form-control w-75 py-4 px-3 rounded" id="Descriptions" aria-describedby="emailHelp"
                            placeholder="Enter Descriptions" onChange={(e) => setDescriptions(e.target.value)} value={Descriptions}/>
                       </div> 
                       <div className="col-lg-6 col-12 px-4 py-2  d-flex justify-content-start align-items-start  flex-column">
                        <label htmlFor="nameInput" className="form-label mr-5">Header & footer</label>
                        <Dropdown className='w-75' value={headerAndFooter} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a type" />

                       </div> 
                     </div>
                     <div className='my-5 container d-flex justify-content-end align-items-center'>
                     <Button label="Add page" type='submit' className="p-button-raised p-button-secondary" />
                     </div>
                     </form>
                </div>
                </div>
              
              
            </div>
            </div>
        </section>
        
        </>
    )
}