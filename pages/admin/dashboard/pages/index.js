import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axiosInstance from "../../../../admin/utilies/axiosInterceptor";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


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
     const getPages= await axiosInstance.get(`/api/admin/addpage`).catch(err=>console.log(err))
     .catch(error => {
         console.error('Error:', error);
       });
     return {
       props: {
        pages: getPages?.data.body ||null
       }, // will be passed to the page component as props
     }
   }