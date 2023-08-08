import HeaderMobile from "./HeaderMobile"
import HeaderDesktop from "./HeaderDesktop"
import BodyMobile from "./BodyMobile"
import BodyDesktop from "./BodyDesktop"
import FooterDesktop from "./FooterDesktop.jsx"
import FooterMobile from "./FooterMobile"
import { useState, useEffect } from "react"

function App() {
  const [windowWidth, setWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindow(window.innerWidth)
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    };
  }, [])


  return (
    <>
     {windowWidth < 850 && <HeaderMobile />}
     {windowWidth >= 850 && <HeaderDesktop />}
     {windowWidth < 850 && <BodyMobile /> }
     {windowWidth >= 850 && <BodyDesktop />}
     {windowWidth >= 850 &&<FooterDesktop />}
     {windowWidth < 850 && <FooterMobile />}

    </>
  )
}

export default App
