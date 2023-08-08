import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGit, faGithub, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Contact.css"

export default function Contact(){
  return(
    <section className="Contact" id="contact">
        <a>
          <span>
              <FontAwesomeIcon icon={faEnvelope} /> hopeglowacki@gmail.com
          </span>
          </a>
          <a href="">
          <span>
              <FontAwesomeIcon icon={faLinkedin} />  LinkedIn
          </span>
          </a>
          <a href="">
          <span>
              <FontAwesomeIcon icon={faGithubSquare} />  Github
          </span>
          </a>
    </section>
  )
}