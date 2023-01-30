let deskEl = document.querySelector(".desktop-menu");
let humbergerIcon = document.querySelector('.humberger');
let closeIcon = document.querySelector('.close');
let navListEl = document.querySelectorAll('.nav-list');

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