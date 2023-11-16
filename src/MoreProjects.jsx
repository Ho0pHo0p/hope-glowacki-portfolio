import Project from "./Project"
import "./MoreProjects.css"
import imageSequence from "./assets/sequences.png"
import imageLandingPage from "./assets/landingPage.png"
import imagePortfolio from "./assets/portfolio.png"


export default function MoreProjects(){
  return(
    <div>
      <h3>More Projects</h3>
      <div className="MoreProjects">
       <Project title="Writing Outline Tool" summary="Plan out your novel or screenplay using the eight sequence outline model" role="Web Developer and Web Designer"  github="https://github.com/Ho0pHo0p/writing-outline-tool" website="https://writing-outline-tool.netlify.app" image={imageSequence} skills={
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>UX Design</li>
      </ul>
    }/>

       <Project title="Sample Landing Page" summary="Explore the landing page of a financial tech company" role="Web Developer"  github="https://github.com/Ho0pHo0p/fintech-landing-page" website="https://fintech-landingpage-sample.netlify.app" 
       image={imageLandingPage}
       skills={
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    }/>

<Project title="Personal Portfolio" summary="Hope Glowacki personal portfolio website" role="Web Developer" website="https://www.hopeglowacki.com" github="https://github.com/Ho0pHo0p/hope-glowacki-portfolio" image={imagePortfolio}
       skills={
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      }/>
    </div>

    </div>
  )
}