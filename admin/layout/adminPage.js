// import SideBar from '../components/SideBar/SideBar'
// import HeaderNavbar from '../components/headerNavbar/headerNavbar'
// import FooterNavbar from '../components/footerNavbar/footerNavbar'
import dynamic from 'next/dynamic';

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useSelector } from 'react-redux';

const HeaderNavbar=dynamic(()=> import('../components/headerNavbar/headerNavbar'))
const FooterNavbar=dynamic(()=> import('../components/footerNavbar/footerNavbar'))
const SideBar=dynamic(()=> import('../components/SideBar/SideBar'))



export default function AdminPage(props){
    const style=useSelector(state=>state.style)

    const handle = useFullScreenHandle();
    return(
        <>
           <div className="wrapper">
                <FullScreen handle={handle}>
                    <HeaderNavbar FullScreenHandle={handle.enter}/>
                    <SideBar/>
                    <div className="content-wrapper" style={{marginLeft:style.style?'250px':'0'}}>
                    {props.children}
                    </div>
                    <FooterNavbar/>
                </FullScreen>
             
            </div>
        </>
    )
}