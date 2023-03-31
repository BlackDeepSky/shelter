const toogleButton = document.querySelector('.toogle-button');
const toogleMenu = document.querySelector('.toogle-menu');
const toogleButtonIcon = document.querySelector('.toogle-button i');

toogleButton.onclick = function(){
    toogleMenu.classList.toggle('toogle-menu__open');
    const isOpen = toogleMenu.classList.contains('toogle-menu__open')

    toogleButtonIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
