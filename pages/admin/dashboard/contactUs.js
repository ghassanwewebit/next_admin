import { useEffect } from "react";
import dynamic from "next/dynamic"

import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const ContactUs =dynamic(()=>import('../../../admin/components/contentComp/contentPages/contactUs'))

export default function ContactUsPage(){

    const Router=useRouter()
    const [cookies, setCookie] = useCookies();
  
    useEffect(()=>{
        if(!cookies.Authentications){
          Router.push('/admin')
        }
    },[cookies.Authentications])
  


    return(
        <AdminPage>
            <ContactUs/>
        </AdminPage>
    )
}