import Link from "next/link"
import { useState } from "react"

export default function SideBarItems(props){

const [showSideBar,setShowSideBar]=useState(false)
const toggelsideBarHandler=()=>{
    setShowSideBar(prevState=>!prevState)
}

const sidebarChildren=()=>{
    return props.sidebar.childrens.map(child=>{
        return (
            <li className="nav-item" key={child.title}>
            <Link href={child.path} >
              <a className="nav-link">
              <i className={child.icon}></i>
              <p>{child.title}</p>
              </a>
            </Link>
          </li>
        )
    })
}

    return(

        <li className={`nav-item  ${showSideBar?"menu-open":""}`} onClick={toggelsideBarHandler} >
        <a  className="nav-link">
          <i className={props.sidebar.icon}></i>
          <p>
            {props.sidebar.title}
            <i className="right fas fa-angle-right"></i>
          </p>
        </a>
        <ul className={`nav nav-treeview  ${showSideBar?"display-block":"display-none"}`} >
      {sidebarChildren()}
        </ul>
      </li>

    )
}