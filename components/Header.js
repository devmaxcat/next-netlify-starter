import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
   
    <header>
      
      <Link href="/">
        maxcart
      </Link>

      <Nav />
      <div className="theme">
        theme mode
      </div>
    </header>)

}