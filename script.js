const menuBar = document.querySelector('.menu-bar')
const header = document.querySelector('header')

menuBar.addEventListener('click', () => {
    if(menuBar.firstElementChild.classList.value === 'fa-solid fa-xmark fa-lg') {
        menuBar.firstElementChild.classList.remove('fa-xmark', 'fa-lg') 
        menuBar.firstElementChild.classList.add('fa-bars')
    }else {
        menuBar.firstElementChild.classList.remove('fa-bars')
        menuBar.firstElementChild.classList.add('fa-xmark', 'fa-lg')
    }
})

menuBar.addEventListener('click', () => {
    header.classList.toggle('show-navbar')
})

