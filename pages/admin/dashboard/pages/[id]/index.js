
import { useEffect } from "react";
import AdminPage from "../../../../../admin/layout/adminPage";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import PageDetails from "../../../../../admin/components/contentComp/contentPages/pages/pageDetails";

export default  function PageID(props){

    // console.log(Router.query.id);

    
        const Router=useRouter()
        const [cookies, setCookie] = useCookies();
    
        useEffect(()=>{
            if(!cookies.Authentications){
              Router.push('/admin')
            }
        },[cookies.Authentications])

    return (
        <AdminPage>
        <PageDetails data={props.posts}/>
        </AdminPage>
    )
}



export async function getStaticProps(context){
    const currentPageID=context.params.id
    
   const getAllPostForThisPage= await fetch(`${process.env.NEXT_API}/api/admin/posts/getPostsBYPageID`,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentPageID),
    })
    .then(res=>res.json())
    .catch(error=>console.log("Error",error))
    return {
        props:{
            posts:getAllPostForThisPage?.AllPostsForThisPage || null
        }
    }
}

export async function getStaticPaths(context) {
    console.log("context.query",context.req?.headers)
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: true, // can also be true or 'blocking'
    }
  }
