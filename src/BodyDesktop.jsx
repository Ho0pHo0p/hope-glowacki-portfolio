import Hero from "./Hero"
import "./BodyDesktop.css"
import AboutMe from "./AboutMe"

export default function BodyDesktop(){
  return(
    <main className="BodyDesktop">
      <Hero />
      <AboutMe />
    </main>
  )
}