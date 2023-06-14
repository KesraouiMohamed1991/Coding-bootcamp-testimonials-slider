const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const ensemble = document.querySelector('.ensemble')
const seul = document.querySelector('.seul')
const picture = document.querySelector('.picture')


function next() {
    if (ensemble.classList.contains('active')) {
        ensemble.classList.remove('active')
        seul.classList.add('active')
        picture.style.backgroundImage = `url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')`
}
}

let previous = function () {
    if (seul.classList.contains('active')) {
        seul.classList.remove('active')
        ensemble.classList.add('active')
        picture.style.backgroundImage = `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80')`
    }
}



leftArrow.addEventListener('click', next)
rightArrow.addEventListener('click', previous)



