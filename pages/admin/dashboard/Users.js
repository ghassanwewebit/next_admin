import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const UsersPage =dynamic(()=>import('../../../admin/components/contentComp/contentPages/usersPage'))


export default function Users(){



    return(
           

<UsersPage/>


    )
}

