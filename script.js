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

// ---------------------------Contact form validation---------------------
const formContact = document.getElementById('form');

function validateEmail() {
  const email = document.getElementById('email').value;
  const error = document.getElementById('errorMessage');
  if (email.toLowerCase() !== email) {
    error.innerHTML = 'Please enter your email in lowercase';
    error.style.display = 'block';
    error.style.color = '#FFFF';
    error.style.fontSize = 'larger';
    return false;
  }
  document.getElementById('errorMessage').innerHTML = '';
  return true;
}

formContact.addEventListener('submit', validateEmail);
