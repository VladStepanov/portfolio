import animateParticles from './particles'
import './svg-sprites'
import animateIntroTitle from './introAnimation'

window.onload = () => {
  console.log('onload')
  animateIntroTitle()
  animateParticles()
}