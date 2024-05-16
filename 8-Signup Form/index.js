const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.animation = 'active .5s forwards'
    })
    button.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.animation = 'inactive .5s forwards'
    })
})