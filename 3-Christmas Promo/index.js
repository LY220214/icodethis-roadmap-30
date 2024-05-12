// Write your JavaScript code here
const activeButton = document.querySelector('.button')
const hearts = document.querySelectorAll('.heart')
const heartBox = document.querySelector('.hearts')
activeButton.style.transition = 'all .5s'

const activeHeart = () => {
    heartBox.style.animation = 'active .5s infinite'

    hearts.forEach(heart => {
        heart.style.transition = 'all 2s'
        heart.style.backgroundColor = 'pink'
    })

    activeButton.style.transition = 'all 1s'
    activeButton.style.backgroundColor = '#eef0f2'
    activeButton.style.color = '#232e4d'
    setTimeout(() => {
        activeButton.textContent = '已激活'
    }, 1000)
    activeButton.style.transition = 'all .5s'
}

activeButton.addEventListener('click', activeHeart)