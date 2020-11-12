const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const headerContainer = document.querySelector('.header__container');


btnOpenMenu.addEventListener('click', onBtnOpenMenu);
btnCloseMenu.addEventListener('click', onBtnCloseMenu);
headerContainer.addEventListener('click', onBtnCloseMenu);


function onBtnOpenMenu() {
  openMenu();
}

function openMenu() {
  headerContainer.classList.add('open');
}

function onBtnCloseMenu() {
  closeMenu();
}

function closeMenu() {
  headerContainer.classList.remove('open');
}
