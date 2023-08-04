import "./Card.css"
import "./CardSpecifics.css"

export default function ({className, title, text}) {
  return(
    <section className={`${className} Card`}>
      <p>img</p>
      <div>
      <h3>{title}</h3>
      <p>{text}</p>
      </div>
    </section>
  )
}