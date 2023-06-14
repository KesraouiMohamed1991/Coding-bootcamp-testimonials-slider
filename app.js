const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const ensemble = document.querySelector('.ensemble')
const seul = document.querySelector('.seul')
const picture = document.querySelector('.picture')


function next() {
    if (ensemble.classList.contains('active')) {
        ensemble.classList.remove('active')
        seul.classList.add('active')
        picture.style.backgroundImage = `url(/images/image-john.jpg)`
}
}

let previous = function () {
    if (seul.classList.contains('active')) {
        seul.classList.remove('active')
        ensemble.classList.add('active')
        picture.style.backgroundImage = `url(/images/image-tanya.jpg)`
    }
}



leftArrow.addEventListener('click', next)
rightArrow.addEventListener('click', previous)



