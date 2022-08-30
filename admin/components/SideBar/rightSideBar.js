import { Sidebar } from 'primereact/sidebar';




export default  function RightSideBar(props){

    const setVisibleRight=()=>{
     props.HideSideBar(false)
    }

    return(
    <Sidebar visible={props.visibleRight} position="right" onHide={() => setVisibleRight(false)}>
    <h3>Right Sidebar</h3>
    </Sidebar>

)


}