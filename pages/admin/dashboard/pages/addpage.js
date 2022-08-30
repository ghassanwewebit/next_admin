import { useEffect } from "react";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
const AdminPage =dynamic(()=>import('../../../../admin/layout/adminPage'))
const AddpageContent =dynamic(()=>import('../../../../admin/components/contentComp/contentPages/pages/addPage'))

export default function AddPage(){


    const Router=useRouter()
    const [cookies, setCookie] = useCookies();

    useEffect(()=>{
        if(!cookies.Authentications){
          Router.push('/admin')
        }
    },[cookies.Authentications])
    return(
        <AdminPage>
            <AddpageContent/>
        </AdminPage>

        
    )
}