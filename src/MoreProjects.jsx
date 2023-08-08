import Project from "./Project"
import "./MoreProjects.css"
import imageSequence from "./assets/sequences.png"
import imageCoffee from "./assets/coffee.png"


export default function MoreProjects(){
  return(
    <div>
      <h3>More Projects</h3>
      <div className="MoreProjects">
       <Project title="Writing Outline Tool" summary="Plan out your novel or screenplay using the eight sequence outline model" role="Web Developer"  github="https://github.com/Ho0pHo0p/writing-outline-tool" website="https://writing-outline-tool.netlify.app" image={imageSequence} skills={
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    }/>
       <Project title="Coffee Landing Page" summary="Explore the landing page of a coffee company" role="Web Developer"  github="https://github.com/Ho0pHo0p/coffee-website" website="#" image={imageCoffee}
       skills={
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    }/>
    </div>

    </div>
  )
}