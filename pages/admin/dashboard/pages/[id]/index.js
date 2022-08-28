import { useRouter } from "next/router";

import AdminPage from "../../../../../admin/layout/adminPage";

import PageDetails from "../../../../../admin/components/contentComp/contentPages/pages/pageDetails";
const data=[
    {
        "id": 1000,
        "name": "James Butt",
        "country": {
            "name": "Algeria",
            "code": "dz"
        },
        "company": "Benton, John B Jr",
        "date": "2015-09-13",
        "status": "unqualified",
        "verified": true,
        "activity": 17,
        "representative": {
            "name": "Ioni Bowcher",
            "image": "ionibowcher.png"
        },
        "balance": 70663
    },
    {
        "id": 1001,
        "name": "Josephine Darakjy",
        "country": {
            "name": "Egypt",
            "code": "eg"
        },
        "company": "Chanay, Jeffrey A Esq",
        "date": "2019-02-09",
        "status": "proposal",
        "verified": true,
        "activity": 0,
        "representative": {
            "name": "Amy Elsner",
            "image": "amyelsner.png"
        },
        "balance": 82429
    },
    
]
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


export async function getServerSideProps(context){
    const currentPageID=context.query.id
    
   const getAllPostForThisPage= await fetch(`${process.env.NEXT_API}api/admin/posts/getPostsBYPageID`,{
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