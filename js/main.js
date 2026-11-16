const unitBtn = document.querySelector('#unit-btn');
const switchContainer = document.querySelector('.header__dropdown-menu');

unitBtn.addEventListener('click', () => {
  switchContainer.classList.toggle('is-hidden');
});
