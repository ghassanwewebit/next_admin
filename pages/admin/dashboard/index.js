import { useSelector } from "react-redux";
import { useEffect } from "react";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const HomePageContent =dynamic(()=>import('../../../admin/components/contentComp/contentPages/homePage'))



export default function Admin(){
  const [cookies, setCookie] = useCookies();
  console.log("cookies",cookies.Authentications)

    const token=useSelector(state=>state.auth)
    const Router=useRouter()

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