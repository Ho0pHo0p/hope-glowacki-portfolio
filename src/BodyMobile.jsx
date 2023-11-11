import Name from "./Name"
import AboutMe from "./AboutMe"
import FeaturedProjects from "./FeaturedProjects"
import MoreProjects from "./MoreProjects"
import "./BodyMobile.css"

export default function BodyMobile(){
  return(
    <main className="BodyMobile">
      <Name />
      <AboutMe />
      <FeaturedProjects />
      <MoreProjects />
    </main>
  )
  
}