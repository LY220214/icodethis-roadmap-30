let isRounded = false
let isDark = false
let isProgress = false
let isCentered = false
let isLoading = false
const switches = document.querySelectorAll('.switch')
const toast = document.querySelector('.toast')
const toastText = toast.querySelector('.toast-text')
const succeed = toast.querySelector('.succeed')
const progress = document.querySelector('.progress')
const theme = document.documentElement.style

// 方便处理按钮
const switchMap = new Map()

// 方便修改主题
const themes = {
    backgroundColor: {
        base: '--body-background-color',
        light: '--light-background-color',
        dark: '--dark-background-color'
    },
    textColor: {
        base: '--text-color',
        light: '--light-text-color',
        dark: '--dark-text-color'
    },
    toastBackgroundColor: {
        base: '--toast-background-color',
        light: '--light-toast-background-color',
        dark: '--dark-toast-background-color'
    },
    succeedTextColor: {
        base: '--succeed-text-color',
        light: '--light-succeed-text-color',
        dark: '--dark-succeed-text-color',
    },
    succeedBackgroundColor: {
        base: '--succeed-background-color',
        light: '--light-succeed-background-color',
        dark: '--dark-succeed-background-color'
    },
    warning: {
        color: '--warning-color',
        backgroundColor: '--warning-background-color'
    }
}

// 用于记录定时器id
let finishTimeout

// 圆角/方角 转换
const roundToast = (node) => {
    if (isRounded) {
        node.querySelector('.switch-button').style.animation = 'close 1s forwards'
        toast.classList.remove('rounded-full')
        progress.classList.remove('rounded-full')
    } else {
        node.querySelector('.switch-button').style.animation = 'open 1s forwards'
        toast.classList.add('rounded-full')
        progress.classList.add('rounded-full')
    }
    isRounded = !isRounded
}

// 主题变换
const changeTheme = (node) => {
    if (isDark) {
        node.querySelector('.switch-button').style.animation = 'close 1s forwards'
        for (const key in themes) {
            // 正在加载时不修改状态图标主题
            if (key.includes('warning') || (key.includes('succeed') && isLoading)) continue
            const item = themes[key]
            theme.setProperty(item.base, `var(${item.light})`)
        }
    } else {
        node.querySelector('.switch-button').style.animation = 'open 1s forwards'
        for (const key in themes) {
            // 正在加载时不修改状态图标主题
            if (key.includes('warning') || (key.includes('succeed') && isLoading)) continue
            const item = themes[key]
            theme.setProperty(item.base, `var(${item.dark})`)
        }
    }
    isDark = !isDark
}
const showProgress = (node) => {
    // 正在加载 -> 停止加载
    if (isProgress) {
        node.querySelector('.switch-button').style.animation = 'close 1s forwards'

        afterLoading()

        if (finishTimeout) clearTimeout(finishTimeout)
    }
    // 停止加载 -> 正在加载
    else {
        node.querySelector('.switch-button').style.animation = 'open 1s forwards'

        loading()

        finishTimeout = setTimeout(() => {
            afterLoading()
        }, 5000)
    }
    isProgress = !isProgress
}

// 文字居中
const centerToastText = (node) => {
    const toastText = toast.querySelector('.items-center')
    if (isCentered) {
        node.querySelector('.switch-button').style.animation = 'close 1s forwards'
        toastText.classList.remove('justify-center')
    } else {
        node.querySelector('.switch-button').style.animation = 'open 1s forwards'
        toastText.classList.add('justify-center')
    }
    isCentered = !isCentered
}

switchMap.set('round', roundToast)
switchMap.set('theme', changeTheme)
switchMap.set('progress', showProgress)
switchMap.set('center', centerToastText)

const switchClickedHandler = (e) => {
    switchMap.get(e.currentTarget.dataset.name)(e.currentTarget)
}

switches.forEach(item => {
    item.addEventListener('click', switchClickedHandler)
})

toast.addEventListener('mouseenter', () => {
    toast.style.animation = ''
    toast.style.animation = 'hover .5s forwards'
})

toast.addEventListener('mouseleave', () => {
    toast.style.animation = ''
    toast.style.animation = 'mouseleave .5s'
})



// 模拟加载
const loading = () => {
    isLoading = true
    succeed.innerText = '!'
    toastText.innerText = '正在删除……'
    theme.setProperty(themes.succeedTextColor.base, `var(${themes.warning.color})`)
    theme.setProperty(themes.succeedBackgroundColor.base, `var(${themes.warning.backgroundColor})`)
    progress.classList.remove('hidden')
}

// 模拟加载完毕
const afterLoading = () => {
    isLoading = false
    toast.style.animation = 'finish 1s'
    succeed.innerText = '√'
    toastText.innerText = '完成'
    if (isDark) {
        theme.setProperty(themes.succeedTextColor.base, `var(${themes.succeedTextColor.dark})`)
        theme.setProperty(themes.succeedBackgroundColor.base, `var(${themes.succeedBackgroundColor.dark})`)
    } else {
        theme.setProperty(themes.succeedTextColor.base, `var(${themes.succeedTextColor.light})`)
        theme.setProperty(themes.succeedBackgroundColor.base, `var(${themes.succeedBackgroundColor.light})`)
    }
    progress.classList.add('hidden')
    setTimeout(()=> {
        toast.style.animation = ''
    }, 1000)
}
