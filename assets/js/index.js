const headerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
headerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
})