import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./HeaderMobile.css"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function HeaderMobile(){
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className="HeaderMobile">
      <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="bars"/>
      {menu && <MobileMenu />}
    </header>
  )
}
