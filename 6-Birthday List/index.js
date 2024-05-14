const list = document.querySelector('.list')
const button = document.querySelector('.button')
const body = document.querySelector('body')
const header = document.querySelector('.header p')
const card = document.querySelector('.card')
const data = [
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Alice Johnson", "age": 30},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Bob Smith", "age": 45},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Charlie Brown", "age": 64},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "David Lee", "age": 52},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Emma Davis", "age": 72},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Frank White", "age": 53},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Grace Martinez", "age": 67},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Henry Wilson", "age": 60},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Ivy Thompson", "age": 31},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Jack Clark", "age": 29},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Kelly Hall", "age": 62},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Leo Hill", "age": 41},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Mia Adams", "age": 61},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Noah Baker", "age": 39},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Olivia Green", "age": 72},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Peter Allen", "age": 51},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Quinn Nelson", "age": 44},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Rachel Carter", "age": 61},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Sam Turner", "age": 56},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Tina Flores", "age": 57},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Uma Murphy", "age": 56},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Victor Morgan", "age": 50},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Wendy Cooper", "age": 61},
    {"avatar": "https://gd-hbimg.huaban.com/c046f4f7f9bf38d2b93ab146138126142e8d14931e930-adLhbn_fw236", "name": "Xavier Reed", "age": 35},
]
const timeoutList = []
const init = () => {
    showBrief()
    header.innerText = `${data.length} birthdays today`
}

// 简略模式
const showBrief = () => {
    // 清除详细模式的网格布局
    list.classList.remove('grid')
    list.classList.remove('grid-cols-4')
    list.innerHTML = ''
    // 根据实际高度决定展示多少个
    const showTotals = 6
    // 如果不能展示完 就展示一部分
    if (data.length > showTotals) {
        for (let i = 0; i < showTotals; i++) {
            list.innerHTML = list.innerHTML + `<div class="item flex justify-start w-full p-1 select-none hover:scale-105">
                <img class="h-[45px] w-[45px] rounded-full" src="${data[i].avatar}" alt="头像"/>
                <div class="ml-3 flex flex-col justify-center items-start select-auto">
                    <p class="font-bold font-sans">${data[i].name}</p>
                    <p class="text-[12px] text-[grey] font-mono">${data[i].age} years</p>
                </div>
            </div>`
        }
    } else {
        data.forEach(item => {
            list.innerHTML = list.innerHTML + `<div class="item flex justify-start w-full p-1 select-none hover:scale-105">
                <img class="h-[45px] w-[45px] rounded-full" src="${item.avatar}" alt="头像"/>
                <div class="ml-3 flex flex-col justify-center items-start select-auto">
                    <p class="font-bold font-sans">${item.name}</p>
                    <p class="text-[12px] text-[grey] font-mono">${item.age} years</p>
                </div>
            </div>`}
        )
    }
}

// 详细模式
const showDetail = () => {
    // 使用网格布局
    list.innerHTML = ''
    list.classList.add('grid')
    list.classList.add('grid-cols-4')
    data.forEach(item => {
        list.innerHTML = list.innerHTML + `<div class="item flex justify-start w-full p-1 select-none hover:scale-105">
                <img class="h-[45px] w-[45px] rounded-full" src="${item.avatar}" alt="头像"/>
                <div class="ml-3 flex flex-col justify-center items-start select-auto">
                    <p class="font-bold font-sans">${item.name}</p>
                    <p class="text-[12px] text-[grey] font-mono">${item.age} years</p>
                </div>
            </div>`}
    )
}

let isCollapse = false

// 切换模式
const toggle = () => {
    if (isCollapse) {
        card.style.transition = 'all .75s cubic-bezier(0.61,-0.11, 0.7,-0.11)'
        card.style.width = 350 + 'px'
        button.innerText = '查看全部'
        header.style.transform = 'translateX(0)'
        // 数据延迟填充 优化视觉效果
        setTimeout(() => {
            showBrief()
        }, 650)
    } else  {
        card.style.transition = 'all .75s cubic-bezier(0.61,-0.11, 0.7,-0.11)'
        header.style.transition = 'all .75s cubic-bezier(0.61,-0.11, 0.7,-0.11)'
        header.style.transform = 'translateX(-40%)'
        card.style.width = 270 * 4 + 'px'
        button.innerText = '返回'
        // 数据延迟填充 优化视觉效果
        setTimeout(() => {
            showDetail()
        }, 650)
    }
    isCollapse = !isCollapse
}

button.addEventListener('click', toggle)

// 初始化
init()
