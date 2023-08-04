import Hero from "./Hero"
import "./BodyDesktop.css"
import Card from "./Card"
import { textObj } from "./text"

export default function BodyDesktop(){
  const text = textObj;

  return(
    <main className="BodyDesktop">
      <Hero />
      <Card className="AboutMe" title="About Me" text={text.aboutMe}/>
      <Card className="Projects" title="Projects" text={text.projects}/>
      <Card className="Contact" title="Contact" text={text.contact}/>
    </main>
  )
}