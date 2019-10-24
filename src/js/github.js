import Handlebars from 'handlebars'

const langColors = {
  'vue': 'dark',
  'javascript': 'yellow'
}

fetch('https://api.github.com/users/vladStepanov/repos')
  .then(res => res.json())
  .then(repos => {
    console.log(repos)
    const source = document.querySelector('#github__repo').innerHTML
    const template = Handlebars.compile(source)

    let cards = ''
    repos
      .filter(repo => !repo.fork)
      .forEach(repo => {
        cards += template({
          title: repo.name,
          desc: repo.description,
          lang: repo.language,
          langColor: langColors[repo.language.toLowerCase()],
          link: repo.clone_url,
        })
    })
    document.querySelector('.github__repos').innerHTML = cards

    // const wrapper = document.querySelector('.github__repos')
    // const repoNode = document.querySelector('.github__repos__item')
    // repos
    //   .filter(repo => !repo.fork)
    //   .forEach(repo => {
    //     const curRepo = repoNode.cloneNode(true)
    //     console.log(curRepo)
    //     const title = curRepo.querySelector('.github__repos__title a')
    //     title.textContent = repo.name
    //     title.href = repo.clone_url

    //     const desc = curRepo.querySelector('.github__repos__desc')
    //     desc.textContent = repo.description
    //     wrapper.appendChild(curRepo)
    //   })
  })