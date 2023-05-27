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

const projects = [
  {
    name: 'METRICS WEBAPP',
    des: ['Canopy', 'Frontend', '2023'],
    img: './images/firstcard.png',
    description:
      'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that was created making use of React and Redux.',
    desc1:
      'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that was created making use of React and Redux.',
    technologies: ['HTML', 'CSS', 'React and Redux'],
    technologies1: ['Javascript', 'ruby', 'Bootstrap'],
    liveVersion: 'https://graceful-treacle-9ae10f.netlify.app',
    sourceCode: 'https://github.com/Gmanlove',
  },
  {
    name: 'DREAMVIEW SUMMIT',
    des: ['Canopy', 'Frontend', '2023'],
    img: './images/second.png',
    description:
      'This project showcases my proficiency in a range of technologies, as well as my ability to create user-friendly interfaces and robust functionality. Build with HTML,CSS and Javascript',
    desc1:
      'My Capstone Project demonstrates my ability to design and build a functional web-based platform that addresses a real-world problem.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['React-redux', 'ruby', 'Bootstap'],
    liveVersion: 'https://fabulous-empanada-256871.netlify.app',
    sourceCode: 'https://github.com/Gmanlove',
  },
  {
    name: 'SPACE TRAVELER HUB',
    des: ['Canopy', 'backend', '2023'],
    img: './images/third.png',
    description:
    'The Space Travelers Hub is a service through which SpaceX astronauts can book rockets or schedule missions for a particular timeframe.',
    desc1:
      'The Space Travelers Hub is a service through which SpaceX astronauts can book rockets or schedule missions for a particular timeframe.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['React-redux', 'ruby', 'Bootstrap'],
    liveVersion: 'https://inspiring-maamoul-159777.netlify.app',
    sourceCode: 'https://github.com/Gmanlove',
  },
  {
    name: 'POKEMON APP',
    des: ['Canopy', 'backend', '2023'],
    img: './images/fourth.png',
    description:
      'A pokemon website is designed for children and for adults who used to love pokemon games in their childhood. From the website, users could access the different creatures which inhabit the world of pokemon games',
    desc1:
      'Users can give like for the creatures which they liked most and can also write their insights in the comments portion.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootsrap'],
    liveVersion: 'https://resilient-smakager-5c90ff.netlify.app',
    sourceCode: 'https://github.com/Gmanlove',
  },
];

const workpage = document.querySelector('#workpage');
for (let i = 0; i < projects.length; i += 1) {
  workpage.innerHTML += `
  <div class="card-proj">
  <img src="${projects[i].img}" alt="project card image" />
  <div class="project-card-iterms flex column">
    <h2 class="card-title">${projects[i].name}</h2>
    <div class="card-lists">
      <p class="canopy">${projects[i].des[0]}</p>
      <div class="round"></div>
      <p>${projects[i].des[1]}</p>
      <div class="round"></div>
      <p>${projects[i].des[2]}</p>
    </div>
    <div class="card-note">
      <p>
      ${projects[i].description}
      </p>
    </div>
    <div class="card-tag">
      <ul class="card-skills flex">
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
      </ul>
    </div>
    <button type="button" id="btn-${i}">See Project</button>
  </div>
  </div>
  `;
}

const modal = document.getElementById('modal1');

for (let j = 0; j < projects.length; j += 1) {
  const seeBtn = document.querySelectorAll(`[id=btn-${j}]`);
  seeBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
        <div class="popup-container block-popup">
          <div id="popup-modal" class="pop-content">
            <div class="headline-popup">
              <h1>${projects[j].name}</h1>
              <a href="#" role="button" onclick="closePopup()">
                <div class="popup-clsbtn">x</div>
              </a>
            </div>
          </div>
          <ul class="small-tags">
            <li class="canopy-sm-tag">${projects[j].des[0]}</li>
            <li>
              <div class="round-popup"></div>
            </li>
            <li class="second-sm-tag">${projects[j].des[1]}</li>
            <li>
              <div class="round-popup"></div>
            </li>
            <li class="second-sm-tag">${projects[j].des[2]}</li>
          </ul>
          <div class="popup-image-container">
            <img src="${projects[j].img}" alt="pop-image" />
          </div>
          <div class="buttom-content-container">
            <div class="paragraph-description">
              <p class="paragraph-description-desktop">
                ${projects[j].desc1}
              </p>
            </div>
            <div class="action-content">
              <div class="popup-tags">
                <ul class="first">
                  <li>${projects[j].technologies[0]}</li>
                  <li>${projects[j].technologies[1]}</li>
                  <li>${projects[j].technologies[2]}</li>
                </ul>
                <ul class="second">
                  <li>${projects[j].technologies1[0]}</li>
                  <li>${projects[j].technologies1[1]}</li>
                  <li>${projects[j].technologies1[2]}</li>
                </ul>
              </div>
              <div class="divider-popup">
                <img src="./images/Vector 4.png" alt="Divider popup" />
              </div>
              <div class="popup-button-action">
                <button id="seeLiveBtn-${j}" type="button">
                  <div class="source-code">
                    <a href="${projects[j].liveVersion}" target="_blank">See Live</a>
                  </div>
                  <div class="deploy-icon">
                    <img src="./images/deploy.svg" alt="deployment icon" class="deploy-icon-popup" />
                  </div>
                </button>
                <button class="submit-github">
                  <div class="live-version">
                    <a href="${projects[j].sourceCode}" target="_blank">See Source</a>
                  </div>
                  <div class="github-img">
                    <img src="./images/github-popup.svg" alt="github icon" class="github-icon-popup" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      const seeLiveBtn = document.getElementById(`seeLiveBtn-${j}`);
      seeLiveBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        window.open(projects[j].liveVersion, '_blank', 'noopener noreferrer');
      });

      const closeBtn = document.querySelector('.popup-clsbtn');
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });
}

const arrow = document.getElementById('arrow');
const frameworkList = document.getElementById('frameworkList');

arrow.addEventListener('click', () => {
  frameworkList.style.display = frameworkList.style.display === 'none' ? 'block' : 'none';
});

const arrow2 = document.getElementById('arrow2');
const skillList = document.getElementById('skillList');

arrow2.addEventListener('click', () => {
  skillList.style.display = skillList.style.display === 'none' ? 'block' : 'none';
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
