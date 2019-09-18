import animateParticles from './particles'
import './svg-sprites'
import animateIntroTitle from './introAnimation'

animateParticles()
window.onload = () => {
  animateIntroTitle()
  document.body.classList.remove('load')
}