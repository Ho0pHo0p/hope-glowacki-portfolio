import "./FeaturedProjects.css"
import Project from "./Project"
import imageDesktop from "./assets/parks.png"
import imageMobile from "./assets/mobileParks.png"

export default function FeaturedProjects({imageType}){
  let image;

  if(imageType === "imageDesktop"){
    image = imageDesktop
  } else {
    image = imageMobile
  }

  return(
    <section id="projects" className="FeaturedProjects">
       <h3 >Featured Projects</h3>
      <div className="Info">
        <Project title="National Park Search"summary="Discover National Parks by state and research park accommodations" role="Web Developer" collaborators="Phoebe Glowacki - UX Designer" github="https://github.com/Ho0pHo0p/national-park-search" website="https://national-park-search.netlify.app" skills={
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