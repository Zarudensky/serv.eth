const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const headerContainer = document.querySelector('.header__container');


btnOpenMenu.addEventListener('click', onBtnOpenMenu);
btnCloseMenu.addEventListener('click', onBtnCloseMenu);
headerContainer.addEventListener('click', onBtnCloseMenu);


function onBtnOpenMenu(e) {
  e.preventDefault();
  openMenu();
}

function openMenu() {
  headerContainer.classList.add('open');
}

function onBtnCloseMenu(e) {
  e.preventDefault();
  closeMenu();
}

function closeMenu() {
  headerContainer.classList.remove('open');
}
