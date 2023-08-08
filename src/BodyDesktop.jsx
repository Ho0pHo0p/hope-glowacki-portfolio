import Name from "./Name"
import "./BodyDesktop.css"
import AboutMe from "./AboutMe"
import FeaturedProjects from "./FeaturedProjects"
import MoreProjects from "./MoreProjects"
import Contact from "./Contact"

export default function BodyDesktop(){

  return(
    <main className="BodyDesktop">
      <Name />
      <AboutMe />
      <FeaturedProjects />
      <MoreProjects />
    </main>
  )
}