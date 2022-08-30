import { useSelector } from "react-redux";
import { useEffect } from "react";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const HomePageContent =dynamic(()=>import('../../../admin/components/contentComp/contentPages/homePage'))



export default function Admin(){
    const Router=useRouter()
    const [cookies, setCookie] = useCookies();

    useEffect(()=>{
        if(!cookies.Authentications){
          Router.push('/admin')
        }
    },[cookies.Authentications])
    return (

      <AdminPage>
        <HomePageContent/>
      </AdminPage>


       

    )
}