import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function PagePostUpdate(){
    const Router=useRouter()
    const [cookies, setCookie] = useCookies();

    useEffect(()=>{
        if(!cookies.Authentications){
          Router.push('/admin')
        }
    },[cookies.Authentications])

    return (
        
        <div> update post </div>
    )
}