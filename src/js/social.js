import Handlebars from 'handlebars'

const socials = [
  {
    link: 'https://t.me/elegy1',
    sprite: '#telegram'
  },
  {
    link: 'https://github.com/vladStepanov',
    sprite: '#github'
  },
  {
    link: 'https://linkedin.com/in/vladislavstp/',
    sprite: '#linkedin'
  }
]

const source = document.querySelector('.social__item--template').innerHTML

const template = Handlebars.compile(source)
let items = ''

socials.forEach(({ link, sprite }) => items += template({ link, sprite }))

document.querySelector('.social').innerHTML = items