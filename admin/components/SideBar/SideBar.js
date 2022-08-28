import Image from "next/image"
import logoimage from './../../../public/img/logo.svg'
import user2 from './../../../public/img/defaultImage.jpeg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import sidebarData from './sidebaritems.json'
import SideBarItems from "./SideBarItems";
import Link from "next/link";

export default  function SideBar(){
  const style=useSelector(state=>state.style)
  const [toggelNavbar,setToggelNabBar]=useState(false)


  useEffect(()=>{
    setToggelNabBar(style.style)
  
  },[style])

  const sideBarHandler=()=>{
    return  sidebarData.map(sidebar=>{
        return(
          <SideBarItems key={sidebar.title} sidebar={sidebar}/>
        )
      })
    
  }
    return(

        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{display:toggelNavbar? 'block':"none"  }}>
        {/* Brand Logo  */}
        <div className="brand-link d-flex  justify-content-start align-items-center">
          <Image src={logoimage} alt="AdminLTE Logo" className="brand-image img-circle elevation-3 " 
          width={40}
          height={40}/>
          <span className="brand-text font-weight-light mx-3 text-">WEWEBIT</span>
        </div>
        {/* Sidebar  */}
        <div className="sidebar">
          {/* Sidebar user panel (optional)  */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex  justify-content-start align-items-center">
            <div className="image">
              <Image src={user2} className="img-circle elevation-2" alt="User Image"
              width={30}
              height={30}/>
            </div>
            <div className="info">
              <Link href="#bawqwas" className="d-block">Alexander Pierce</Link>
            </div>
          </div>
          {/* SidebarSearch Form  */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu  */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         {sideBarHandler()}
            </ul>
          </nav>
        {/* //   sidebar-menu  */}
        </div>
        {/* // /.sidebar  */}
      </aside>
    
    )
}