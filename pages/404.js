
import Link from "next/link"
import Image from "next/image"
import Rightimage from'./../public/img/right-shape.png'
import leftimage from "./../public/img/image-left.png"
export default function AdminError(){


    return(

<div className="wrapper h-100 mt-5-wrapper">
  <div className="container ">
    <div className="grid-row">
      <div className="colmun colmun-left">
		<Image src={leftimage} alt="image-left"/>
        <h1 className="px-spc-b-20">We can t find the page you are looking for.</h1>
        <span className="px-spc-b-20">This page has been relocated or removed.</span>
        <button className="go-home"><i className="fa fa-home"></i> <Link href='/'> Go Home</Link></button>
      </div>
      <div className="colmun colmun-right">
		<Image src={Rightimage} alt="image-left"/>

      </div>
    </div>
  </div>
</div>
    )
}