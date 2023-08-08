import "./FeaturedProjects.css"
import Project from "./Project"
import image from "./assets/parks.png"

export default function FeaturedProjects(){
  return(
    <section className="FeaturedProjects">
       <h3>Featured Projects</h3>
      <div className="Info">
        <Project title="National Park Search"summary="Discover National Parks by state and research park accommodations" role="Web Developer" collaborators="Phoebe Glowacki" github="#" website="#" skills={
        <ul>
          <li>API</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        }/>
      <img src={image}></img>
      </div>
    </section>
  )
}