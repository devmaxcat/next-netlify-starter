import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <>

      <main id="content" className="home">
        <div>
          <h1>I'm Chance!</h1>
          <p>I love art, snowboarding, and programming. I've been programming in various languages for over 6 years, here's my <Link href={'/resume'} className="link-arrow">resume</Link></p>
        </div>


       
       
      </main>
    </>



  )
}