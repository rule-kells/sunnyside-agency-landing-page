const btnNav = document.querySelector('.btn--nav')
const navHeader = document.querySelector('.nav--header')

btnNav.addEventListener('click', _ => {
    navHeader.classList.toggle('active')
})