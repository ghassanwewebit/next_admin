import { useEffect } from "react";

import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const UsersPage =dynamic(()=>import('../../../admin/components/contentComp/contentPages/usersPage'))
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Users(){

    const Router=useRouter()
    const [cookies, setCookie] = useCookies();
  
    useEffect(()=>{
        if(!cookies.Authentications){
          Router.push('/admin')
        }
    },[cookies.Authentications])

    return(
           

        <AdminPage>
<UsersPage/>

        </AdminPage>

    )
}

