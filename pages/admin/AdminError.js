

import Link from "next/link"
export default function AdminError(){


    return(

        <div id="notfound">
		<div className="notfound-bg"></div>
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
			<Link href="/adminll" className="home-btn">Go Home</Link>
			<Link href="https://wewebit.com" className="contact-btn">Contact us</Link>
			<div className="notfound-social">
		
			</div>
		</div>
	</div>
    )
}