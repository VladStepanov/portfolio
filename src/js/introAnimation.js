import { TimelineLite } from 'gsap/TweenMax'

export default () => {
  const title = document.querySelector('.intro__title')
  const subtitle = document.querySelector('.intro__subtitle')

  const tl = new TimelineLite()
  tl
    .fromTo(title, 1.5, { y: "-100%" }, { y: "0%", ease: "Power4.easeOut" })
    .fromTo(subtitle, 1.5, { x: "-100%" }, { x: "0%", ease: "Power4.easeOut" }, '-=1.5')
}