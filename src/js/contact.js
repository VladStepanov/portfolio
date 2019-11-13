
// textarea autogrow
const textarea = document.querySelector('.contact__area')

textarea.addEventListener('input', function () {
  this.style.height = this.scrollHeight + 'px'
})

// Send form
const form = document.querySelector('.contact')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  console.log('Form submited')

  fetch('https://simple-nodemailer.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: document.querySelector('.contact__input').value,
      desc: document.querySelector('.contact__area').value
    })
  })
})