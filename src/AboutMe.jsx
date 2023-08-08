import "./AboutMe.css"
import image from './assets/image.png'

export default function AboutMe(){
  return(
    <section className="AboutMe">
      <img src={image}></img>
      <div>
        <h4>About Me</h4>
        <p>Hi, I'm Hope Glowacki! A film student turned web developer. bkf sdifu fdsuh fdiuh df oiohsdf dsiofh sdfioh dfsioh dfskjb fdsiuh oiusehdfi dgfsuih dfhbsd fhdg sfkj dfsg sdfkh dfs fsdi</p>
      </div>
    </section>
  )
}