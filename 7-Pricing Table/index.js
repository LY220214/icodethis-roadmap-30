const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.animation = 'active .5s forwards'
    })
    panel.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.animation = 'inactive .5s forwards'
    })
})