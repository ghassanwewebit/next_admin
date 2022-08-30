import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";


import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../../admin/layout/adminPage'))
const AllPages =dynamic(()=>import('../../../../admin/components/contentComp/contentPages/pages/pages'))


export default function AllPage(props){

  const Router=useRouter()
  const [cookies, setCookie] = useCookies();

  useEffect(()=>{
      if(!cookies.Authentications){
        Router.push('/admin')
      }
  },[cookies.Authentications])
    return (
        <AdminPage>
        <AllPages pages={props.pages}/>
        </AdminPage>
    )
}


export async function getStaticProps(context) {
     const getPages= await fetch(`${process.env.NEXT_API}/api/admin/addpage`).then(res=>res?.json())
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