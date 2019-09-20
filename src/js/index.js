import animateParticles from './particles'
import './svg-sprites'
import { TimelineLite } from 'gsap/all'
import IntersectedAnimation from './animation'

animateParticles()
document.addEventListener('DOMContentLoaded', function () {
  requestIdleCallback(() => {
    document.body.classList.remove('load')
    const tl = new TimelineLite()

    new IntersectedAnimation()
      .add('.title__wrap', node => {
        tl.fromTo(node, 1, { y: "-100%", opacity: "0" }, { y: "0%", opacity: "1" })
      })
      .add('.intro__title', node => {
        tl.fromTo(node, 1.5, { y: "-110%" }, { y: "0%", ease: Power4.easeOut }, "+=0.5")
      })
      .add('.intro__subtitle', node => {
        tl.fromTo(node, 1.5, { x: "-100%" }, { x: "0%", ease: Power4.easeOut }, "-=1")
      })
      .track()
  })
})