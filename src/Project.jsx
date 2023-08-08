import "./Project.css"

export default function Project({title, summary, role, skills, collaborators, github, website, image}) {
  return(
    <div className="Project">
    <div className="title">
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
    {image && <img src={image}></img>}
    <ul className="tags">
      <li className="name">Role
        <ul>
          <li>{role}</li>
        </ul>
      </li>
      <li className="name skills">Skills & Languages
         {skills}
      </li>
      {collaborators && <li className="name">Collaborators
        <ul><li>{collaborators}</li></ul>
      </li>}
    </ul>
    <div className="links">
      <a href={github}>View Github</a>
      <a href={website}>View Website</a>
    </div>
    </div>
  )
}