import Handlebars from 'handlebars'

const langColors = {
  'vue': 'dark',
  'javascript': 'yellow'
}

fetch('https://api.github.com/users/vladStepanov/repos')
  .then(res => res.json())
  .then(repos => {
    const source = document.querySelector('#github__repo').innerHTML
    const template = Handlebars.compile(source)

    let cards = ''
    let delay = 0
    repos
      .filter(repo => !repo.fork)
      .forEach(repo => {
        delay += .1;
        cards += template({
          title: repo.name,
          desc: repo.description,
          lang: repo.language,
          langColor: langColors[repo.language.toLowerCase()],
          link: repo.clone_url,
          animateDelay: `${delay}s`
        })
    })
    document.querySelector('.github__repos').innerHTML = cards
  })