import { useEffect } from "react";
import AddPosts from "../../../../admin/components/contentComp/contentPages/posts/addPosts";


import AdminPage from "../../../../admin/layout/adminPage";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";


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
    const getPages= await fetch(`${ process.env.NEXT_API}/api/admin/addpage`).then(res=>res.json()
    )
    .catch(error => {
        console.error('Error:', error);
      });
    return {
      props: {
       pages: JSON.parse(JSON.stringify(getPages?.body)),
      }, // will be passed to the page component as props
    }
  }