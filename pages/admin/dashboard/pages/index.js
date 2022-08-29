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
     const getPages= await fetch(`https://next-admin-nu.vercel.app/api/admin/addpage`).then(res=>res.json())
     .catch(error => {
         console.error('Error:', error);
       });
       console.log("getPages",getPages?.body)
     return {
       props: {
        pages: getPages?.body 
       }, // will be passed to the page component as props
     }
   }