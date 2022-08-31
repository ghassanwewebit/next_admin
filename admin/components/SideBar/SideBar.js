import Image from "next/image"
import logoimage from './../../../public/img/logo.svg'
import user2 from './../../../public/img/defaultImage.jpeg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import sidebarData from './sidebaritems.json'
import SideBarItems from "./SideBarItems";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import { authAutions } from "../../store/authStore";

export default  function SideBar(){
  const style=useSelector(state=>state.style)
  const dispatch=useDispatch()
  const [toggelNavbar,setToggelNabBar]=useState(false)
  const [userData,setUsersData]=useState()


  useEffect(()=>{
    setToggelNabBar(style.style)
  },[style])
  useEffect(()=>{
    if(document.cookie){
      const token=document.cookie.split("=")[1]
      var decodedToken = jwt_decode(token);
      setUsersData(decodedToken)
      dispatch(authAutions.setUsersData(decodedToken))

      }
  },[])

  const sideBarHandler=()=>{
    return  sidebarData.map(sidebar=>{
        return(
          <SideBarItems key={sidebar.title} sidebar={sidebar}/>
        )
      })
    
  }
    return(

        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{display:toggelNavbar? 'block':"none"  }}>
        <div className="brand-link d-flex  justify-content-start align-items-center">
          <Image src={logoimage} alt="AdminLTE Logo" className="brand-image img-circle elevation-3 " 
          width={40}
          height={40}/>
          <span className="brand-text font-weight-light mx-3 text-">WEWEBIT</span>
        </div>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex  justify-content-start align-items-center">
            <div className="image">
              <Image src={user2} className="img-circle elevation-2" alt="User Image"
              width={30}
              height={30}/>
            </div>
            <div className="info">
              <Link href="/admin/dashboard/Profile" className="d-block"><a> {userData?.name}</a></Link>
            </div>
          </div>
      
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         {sideBarHandler()}
            </ul>
          </nav>
        </div>
      </aside>
    
    )
}