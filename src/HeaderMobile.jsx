import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMarsAndVenus } from "@fortawesome/free-solid-svg-icons"
import "./HeaderMobile.css"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function HeaderMobile(){
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const hideMenu = () => {
    setMenu(false)
  }

  return (
    <header className="HeaderMobile">
      {menu ? <h2 style={{backgroundColor: 'var(--main-color)'}} onClick={toggleMenu} >H</h2>: <h2 onClick={toggleMenu} >H</h2> }
      <div>
      {menu && <MobileMenu hideMenu={hideMenu}/>}
      </div>
    </header>
  )
}
