import animateParticles from './particles'
import './svg-sprites'
import './github'
import './skills'
import './contact'
import wow from './wow'

animateParticles()

wow.init()

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('load')
})