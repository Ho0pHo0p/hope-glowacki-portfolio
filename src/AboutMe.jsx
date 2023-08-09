import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./AboutMe.css"
import image from './assets/image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function AboutMe(){
  return(
    <section className="AboutMe">
      <img src={image}></img>
      <div>
        <h4>About Me</h4>
        <p>Hello! I'm Hope Glowacki, a detail-driven Front-End Web Developer with a passion for creating immersive digital experiences. Armed with React, JavaScript, HTML5, and CSS skills, I blend creativity with technology to design user-friendly solutions. From crafting apps that simplify exploration to enhancing screenwriters' planning, I thrive on transforming ideas into engaging digital realities. With a background in film and media studies, I bring storytelling flair to coding and design. </p>
        <span>
          <a href="https://www.linkedin.com/in/hope-glowacki" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="https://github.com/Ho0pHo0p" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="mailto:hopeglowacki@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>

        </span>
      </div>
    </section>
  )
}