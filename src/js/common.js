import animateParticles from './particles'
import './svg-sprites'
import animateIntroTitle from './introAnimation'
import animateAll from './animate'
import { TimelineLite } from 'gsap'

animateParticles()
document.addEventListener('DOMContentLoaded', function () {
  requestIdleCallback(() => {
    document.body.classList.remove('load')
    // animateIntroTitle()
    const tl = new TimelineLite()
    const animation = new animateAll()
    animation
      .add('.title__wrap', (nodes, delay) => {
        console.log(nodes)
        nodes.forEach(node => {
          tl.fromTo(node, 0.5, { y: "-30px", opacity: "0" }, { y: "0px", opacity: "1" }, `+= ${delay}`)
          console.log(delay)
        })
      })
      .add('.skill', (nodes, delay) => {
        nodes.forEach(node => {
          console.log(delay)
          tl.fromTo(node, 1, { y: "30px", opacity: "0" }, { y: "0", opacity: "1" }, `+=${delay}`)
        })
        // console.log(delay)
      })
      .watch()
  })
})