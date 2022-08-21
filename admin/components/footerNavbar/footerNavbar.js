import Link from "next/link"
export default function FooterNavbar(){
    return(

        <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 1.0.0
        </div>
        <strong>Copyright &copy; 2022 <Link href="https://wewebit.com">WEWEBIT</Link>.</strong> All rights reserved.
      </footer>
    )
}