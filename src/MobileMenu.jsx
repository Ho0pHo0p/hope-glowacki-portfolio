import NavBar from "./NavBar"
import "./MobileMenu.css"

export default function MobileMenu({hideMenu}){
  return(
    <aside className="MobileMenu" onClick={hideMenu}>
    <NavBar />
    </aside>
  )
}