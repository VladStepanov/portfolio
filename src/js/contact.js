const textarea = document.querySelector('.contact__area')

// textarea autogrow
textarea.addEventListener('input', function () {
  this.style.height = this.scrollHeight + 'px'
})

// Send form
const form = document.querySelector('.contact')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  fetch('http://api.com', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: document.querySelector('.contact__input').value,
      message: document.querySelector('.contact__area').value
    })
  })
})