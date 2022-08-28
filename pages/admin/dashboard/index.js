import { useSelector } from "react-redux";
import { useEffect } from "react";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const HomePageContent =dynamic(()=>import('../../../admin/components/contentComp/contentPages/homePage'))



export default function Admin(){
    const token=useSelector(state=>state.auth)
    const Router=useRouter()


    //check if you have access to the admin page

    // useEffect(()=>{
    //   if(!token.token){
    //     Router.push('/admin')
    //   }
    // },[token])

    return (

      <AdminPage>
        <HomePageContent/>
      </AdminPage>


       

    )
}