
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { useRouter } from 'next/router'

import Link from 'next/link';

export default function PageDetails(props) {
    const [customers1, setCustomers1] = useState([]);
    const Router=useRouter()



 
  


    useEffect(() => {
        setCustomers1(props.data)

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const actionBodyTemplate = (data) => {
        const items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command:async (e) => {
                const pageID= Router.query.id
                Router.push(`/admin/dashboard/pages/${pageID}/${data._id}`)
                }
               
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command:async (e) => {
                    console.log(data)
                    const pageID= Router.query.id
                    deletePostHandler(pageID,data._id)
                }
            },
            
        ]
     return <SplitButton label="options" model={items} className="p-button-rounded mr-2 mb-2" ></SplitButton>;

    }
    const deletePostHandler= async(pageID,postID)=>{
        await fetch(`${process.env.NEXT_API}api/admin/posts/deletePosts`,
                    {
                        method:"DELETE",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                          body:JSON.stringify({
                            page_id:pageID,
                            post_id:postID
                          })
                    })
    }


    return (
        <section className="content-header">
        <div className="container-fluid">
           <div className="row mb-2">
           <div className="col-sm-6 mb-5">
                 <ol className="breadcrumb ">
                 <li className="breadcrumb-item"><Link href="/admin/dashboard">home</Link></li>
                    <li className="breadcrumb-item"><Link href="/admin/dashboard/pages">Pages</Link></li>
                    <li className="breadcrumb-item active">page name</li>
                 </ol>
              </div>
           </div>
            <div className="card p-4">
                <div className=' d-flex justify-content-between mb-5'>
                <h5 className='mb-4'>All posts</h5>
                <Button label="Add posts" className="p-button-Secondary  p-button-rounded mr-5" />
                </div>
                <DataTable value={customers1} paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                    <Column field="post_name" header="Posts name" style={{ width: '20%' }}></Column>
                    <Column field="section_name" header="Sections name" style={{ width: '20%' }}></Column>
                    <Column field="country.name" header="User" style={{ width: '20%' }}></Column>
                    <Column field="post_date" header="Date"  filterField="date" dataType="date" style={{ width: '20%' }}
                        />
                    <Column field="post_Status" header="status" style={{ width: '20%' }}></Column>
                    <Column  feild="_id" headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={(e)=>actionBodyTemplate(e)} />

                </DataTable>
            </div>

        </div>
        </section>
    );
}

 
                 