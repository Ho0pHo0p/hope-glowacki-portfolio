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
        <p>Hi, I'm Hope Glowacki! A film student turned web developer. </p>
        <span>
          <a href="https://www.linkedin.com/in/hope-glowacki" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="https://github.com/Ho0pHo0p" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="mailto:hopeglowacki@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>

        </span>
      </div>
    </section>
  )
}