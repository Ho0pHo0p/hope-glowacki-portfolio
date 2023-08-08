import Project from "./Project"
import "./MoreProjects.css"
import imageSequence from "./assets/sequences.png"
import imageCoffee from "./assets/coffee.png"


export default function MoreProjects(){
  return(
    <div>
      <h3>More Projects</h3>
      <div className="MoreProjects">
       <Project title="Writing Outline Tool" summary="Summary summary summary summary" role="Web Developer"  github="#" website="#" image={imageSequence} skills={
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    }/>
       <Project title="Coffee Landing Page" summary="Summary summary summary summary" role="Web Developer"  github="#" website="#" image={imageCoffee}
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