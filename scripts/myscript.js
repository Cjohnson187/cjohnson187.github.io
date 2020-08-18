/* global document */

var changeHeading = document.querySelector('h1')

changeHeading.textContent = 'Harambe is Love, Harambe is life.'

document.querySelector('html').onclick = function () {
  alert('No touching!')
}

var newImage = document.querySelector('img')

newImage.onclick = function () {
  var myImage = newImage.getAttribute('src')
  if (myImage === 'image/remeber_harambe.jpg') {
    newImage.setAttribute('src', 'image/joseph-chan-pJjUgPm_VTA-unsplash.jpg')
  } else {
    newImage.setAttribute('src', 'image/remeber_harambe.jpg')
  }
}

var newButton = document.querySelector('button')

function congrats () {
  var con = 'Congratulations on your NEVER ENDING Success!!!!'
  alert(con)
}

newButton.onclick = congrats
