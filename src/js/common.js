import animateParticles from './particles'
import './svg-sprites'
import animateIntroTitle from './introAnimation'

animateParticles()
document.addEventListener('DOMContentLoaded', function () {
  requestIdleCallback(() => {
    document.body.classList.remove('load')
    animateIntroTitle()
  })
})