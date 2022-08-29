import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../admin/layout/adminPage'))
const ContactUs =dynamic(()=>import('../../../admin/components/contentComp/contentPages/contactUs'))

export default function ContactUsPage(){


    return(
        <AdminPage>
            <ContactUs/>
        </AdminPage>
    )
}