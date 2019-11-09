import Handlebars from 'handlebars'

const skills = [
  {
    label: 'Webpack',
    sprite: '#webpack',
  },
  {
    label: 'Git',
    sprite: '#git'
  },
  {
    label: 'npm',
    sprite: '#npm'
  },
  {
    label: 'HTML5',
    sprite: '#html'
  },
  {
    label: 'CSS3',
    sprite: '#css'
  },
  {
    label: 'Vue',
    sprite: '#vue'
  },
  {
    label: 'Node JS',
    sprite: '#node'
  },
  {
    label: 'ES6',
    sprite: '#js'
  },
  {
    label: 'Nuxt',
    sprite: '#nuxt'
  }
]

const source = document.querySelector('.skill__item--template').innerHTML

const template = Handlebars.compile(source)
let cards = ''
let delay = 0

skills.forEach(({ label, sprite }) => {
  delay += .1
  cards += template({ label, sprite, delay: `${delay}s` })
})
document.querySelector('.skill').innerHTML = cards