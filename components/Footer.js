import Link from "next/link";
import Nav from "./Nav";

export default function Footer() {
  return (
  <footer>
    <div className="flex-between">
      <Link href="/accessibility">Accessibility Statement</Link>
      <Nav />
      <div>
      contact@maxcat.dev
      </div>
      
    </div>
   
     <div>
    

     Copyright © 2024. All Rights Reserved
     
    </div>
    Site developed by me<br />
      {/* <div className="coffee-button" dangerouslySetInnerHTML={{__html: '<a href="https://www.buymeacoffee.com/devmaxcat" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>'}}></div> */}
  </footer>
  )
}