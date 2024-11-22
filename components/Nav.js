import Link from "next/link"


function Nav() {
    return (
        <nav>
      <Link  href="/about">about</Link>
        <Link href="/blog">blog</Link>
        <Link href="/resume">resume</Link>
      </nav>
    )
}

export default Nav
