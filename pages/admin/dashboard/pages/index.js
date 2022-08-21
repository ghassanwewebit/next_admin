import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../../admin/layout/adminPage'))
const AllPages =dynamic(()=>import('../../../../admin/components/contentComp/contentPages/pages/pages'))


export default function allPages(){

    return (


        <AdminPage>
        <AllPages/>
    </AdminPage>




    )
}