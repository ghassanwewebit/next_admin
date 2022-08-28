import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../../admin/layout/adminPage'))
const AllPages =dynamic(()=>import('../../../../admin/components/contentComp/contentPages/pages/pages'))


export default function allPages(props){
    return (
        <AdminPage>
        <AllPages pages={props.pages}/>
    </AdminPage>
    )
}


export async function getServerSideProps(context) {
     const getPages= await fetch("http://localhost:3000/api/admin/addpage").then(res=>res.json())
     .catch(error => {
         console.error('Error:', error);
       });
      //  console.log("getPages",getPages.body)
     return {
       props: {
        pages: getPages.body 
       }, // will be passed to the page component as props
     }
   }