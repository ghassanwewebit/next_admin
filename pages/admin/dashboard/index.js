import { useSelector } from "react-redux";
import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const HomePageContent =dynamic(()=>import('../../../admin/components/contentComp/contentPages/homePage'))



export default function Admin(){
    const token=useSelector(state=>state.auth)
    console.log(token);

 

    return (

      <AdminPage>
        <HomePageContent/>
      </AdminPage>


       

    )
}