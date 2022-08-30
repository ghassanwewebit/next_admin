import { useRouter } from "next/router";

import AdminPage from "../../../../../admin/layout/adminPage";

import PageDetails from "../../../../../admin/components/contentComp/contentPages/pages/pageDetails";

export default  function PageID(props){
    console.log(props)

    const Router=useRouter()
    // console.log(Router.query.id);


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
    console.log(getAllPostForThisPage)
    return {
        props:{
            posts:getAllPostForThisPage?.AllPostsForThisPage || null
        }
    }
}

export async function getStaticPaths(context) {
    console.log("context.query",context)
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: true, // can also be true or 'blocking'
    }
  }
