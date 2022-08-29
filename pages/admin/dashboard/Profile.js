import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const ProfilePageContent =dynamic(()=>import('../../../admin/components/contentComp/contentPages/profilepage'))

export default function ContactUsPage(){


    return(
        <AdminPage>
            <ProfilePageContent/>
        </AdminPage>
    )
}