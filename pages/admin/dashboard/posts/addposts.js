import { useEffect } from "react";
import AddPosts from "../../../../admin/components/contentComp/contentPages/posts/addPosts";


import AdminPage from "../../../../admin/layout/adminPage";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axiosInstance from "../../../../admin/utilies/axiosInterceptor";


export default function AddpostsPage(props){

  const Router=useRouter()
  const [cookies, setCookie] = useCookies();

  useEffect(()=>{
      if(!cookies.Authentications){
        Router.push('/admin')
      }
  },[cookies.Authentications])

    return(

        <AdminPage>
            <AddPosts pages={props.pages}/>
        </AdminPage>
    )
}


export async function getStaticProps(context) {
    const getPages= await axiosInstance.get(`/api/admin/addpage`).catch(err=>console.log(err))
    console.log("getPages",getPages.data.body)
    return {
      props: {
       pages: getPages.data.body||null
      }, // will be passed to the page component as props
    }
  }