import animateParticles from './particles'
import './svg-sprites'
import { TimelineLite, Power4 } from 'gsap/all'
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
      .add('.about__desc', node => {
        tl.fromTo(node, 1, { x: "-110%" }, { x: "0%", ease: Power4.easeOut })
      })
      .add('.intro__title', node => {
        tl.fromTo(node, 1, { y: "-110%" }, { y: "0%", ease: Power4.easeOut }, "+=0.5")
      })
      .add('.intro__subtitle', node => {
        tl.fromTo(node, 1, { x: "-100%" }, { x: "0%", ease: Power4.easeOut })
      })
      .add('.skill__item', node => {
        tl.fromTo(node, 0.2, { opacity: "0", y: "-50px" }, { opacity: "1", y: "0px" })
      })
      .track()
  })
})