import "./NavBar.css"

export default function NavBar(){
  return (
    <nav className="NavBar">
      <ul>
      <a href="#about-me"><li>About Me</li></a>
      <a href="#projects"><li>Projects</li></a>
      <a href="#contact"><li>Contact</li></a>
      <a download="resume" href="/public/resume.pdf" target="_blank"><li>Resume</li></a>
      </ul>
    </nav>
  )
}