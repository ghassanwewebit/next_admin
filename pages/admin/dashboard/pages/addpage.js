import dynamic from "next/dynamic"

const AdminPage =dynamic(()=>import('../../../../admin/layout/adminPage'))
const AddpageContent =dynamic(()=>import('../../../../admin/components/contentComp/contentPages/pages/addPage'))

export default function AddPage(){

    return(
            <AddpageContent/>

        
    )
}