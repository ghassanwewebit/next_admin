

import { useDispatch,useSelector } from "react-redux"
import React, { useState } from 'react';
import {  styleActions } from "../../store/styleStore"
import Link from "next/link";
import RightSideBar from "../SideBar/rightSideBar";
import { Badge } from 'primereact/badge';

export default function HeaderNavbar(props){
  const [visibleRight, setVisibleRight] = useState(false);
  const [togglefullscreen,setToggleFullScreen]=useState(false)

  const dispatch=useDispatch()
  const style=useSelector(state=>state.style)

  const navBarToggle=()=>{
    dispatch(styleActions.toggleStyle())
  }

  const HideSideBar=(value)=>{
    setVisibleRight(value)
  }

    return(

        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{marginLeft:style.style?'250px':'0'}}>
        <ul className="navbar-nav">
          <li className="nav-item " onClick={navBarToggle}>
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/admin" className="nav-link ">Home </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block ms-5">
            <Link href="#" className="nav-link ms-5"> / Contact</Link>
          </li>
        </ul>
    
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search"></i>
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
    
   
        
     
       
          <li className="nav-item d-flex align-items-center">
              <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.5rem' }}><Badge value="2"></Badge></i>
          </li>
          <li className="nav-item d-flex align-items-center">
             <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.5rem' }}><Badge value="10+" severity="danger" ></Badge></i>
          </li>
          <li className="nav-item d-flex align-items-center">
             <i className="pi pi-envelope p-text-secondary p-overlay-badge " style={{ fontSize: '1.5rem' }}><Badge severity="danger"></Badge></i>
          </li>
          <li className="nav-item" onClick={props.FullScreenHandle}>
            <a className="nav-link" data-widget="fullscreen"  role="button">
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">

            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button" onClick={() => setVisibleRight(true)}>
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
        <RightSideBar visibleRight={visibleRight} HideSideBar={HideSideBar}/>
 

      </nav>
    )
}