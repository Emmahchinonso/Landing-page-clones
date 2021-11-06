const menuButton = document.querySelector('.js-menu-btn');
const nav = document.querySelector('.js-nav')

menuButton.addEventListener('click', (e) => {
  nav.classList.toggle('isOpen')
})