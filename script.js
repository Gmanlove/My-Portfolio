const deskEl = document.querySelector('.desktop-menu');
const humbergerIcon = document.querySelector('.humberger');
const closeIcon = document.querySelector('.close');
const navListEl = document.querySelectorAll('.nav-list');

humbergerIcon.addEventListener('click', () => {
  deskEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  deskEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

navListEl.forEach((element) => {
  element.addEventListener('click', () => {
    deskEl.classList.toggle('active');
    humbergerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  });
});