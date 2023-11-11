import Name from "./Name"
import "./BodyDesktop.css"
import AboutMe from "./AboutMe"
import FeaturedProjects from "./FeaturedProjects"
import MoreProjects from "./MoreProjects"


export default function BodyDesktop(){

  return(
    <main className="BodyDesktop">
      <Name />
      <AboutMe />
      <FeaturedProjects imageType="imageDesktop"/>
      <MoreProjects />
    </main>
  )
}