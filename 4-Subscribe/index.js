const emailInput = document.querySelector('.email')
const button = document.querySelector('.button')
const notify = document.querySelector('.notify')
const checkbox = document.querySelector('.agree')
const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
let isEmailCorrect = false
const checkEmail = () => {
    const email = emailInput.value
    if (regex.test(email)) {
        emailInput.style.animation = 'correct .5s forwards'
        isEmailCorrect = true
    }
    else {
        emailInput.style.animation = 'incorrect .5s forwards'
        isEmailCorrect = false
    }
}

const submit = () => {
    const isChecked = checkbox.checked
    if (isEmailCorrect && isChecked) {
        notify.innerText = '订阅成功！'
        notify.classList.remove('hidden')
        notify.style.animation = 'success .5s forwards'
        setTimeout(() => {
            notify.classList.add('hidden')
        }, 5000)
        return
    }
    if (!isEmailCorrect) {
        notify.innerText = '请检查邮箱！'
        notify.classList.remove('hidden')
        notify.style.animation = 'fail .5s forwards'
        setTimeout(() => {
            notify.classList.add('hidden')
        }, 5000)
        return
    }
    if (!isChecked) {
        notify.innerText = '未同意协议！'
        notify.classList.remove('hidden')
        notify.style.animation = 'fail .5s forwards'
        setTimeout(() => {
            notify.classList.add('hidden')
        }, 5000)
        checkbox.style.animationDirection = 'alternate'
        checkbox.style.animation = 'noChecked 2s infinite'
        setTimeout(() => {
            checkbox.style.animation = ''
        }, 2000)
    }
}

emailInput.addEventListener('focus', () => {
    emailInput.style.animation = 'active 1s forwards'
})

emailInput.addEventListener('blur', checkEmail)

button.addEventListener('click', submit)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        emailInput.blur()
        submit()
    }
})