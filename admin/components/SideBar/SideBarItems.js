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
            <a href={child.path} className="nav-link">
              <i className={child.icon}></i>
              <p>{child.title}</p>
            </a>
          </li>
        )
    })
}

    return(

        <li className={`nav-item  ${showSideBar?"menu-open":""}`} onClick={toggelsideBarHandler} >
        <a href="#" className="nav-link">
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