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
    name: 'Tonic',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio.svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstrap'],
    liveVersion: 'https://gmanlove.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Gmanlove/My-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (1).svg',
    description: 'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstap'],
    liveVersion: 'https://gmanlove.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Gmanlove/My-Portfolio',
  },
  {
    name: 'Facebook 360',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (2).svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootstrap'],
    liveVersion: 'https://gmanlove.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Gmanlove/My-Portfolio',
  },
  {
    name: 'Uber Navigation',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (3).svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['github', 'ruby', 'Bootsrap'],
    liveVersion: 'https://gmanlove.github.io/My-Portfolio/ ',
    sourceCode: 'https://github.com/Gmanlove/My-Portfolio',
  },
];

const workpage = document.querySelector('#workpage');
for (let i = 0; i < projects.length; i += 1) {
  workpage.innerHTML += `
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
            <button type="submit">
              <div class="source-code">
                <a href="">See live </a>
              </div>
              <div class="deploy-icon">
                <img src="./images/deploy.svg" alt="deployment icon" class="deploy-icon-popup" />
              </div>
            </button>
            <button class="submit-github">
              <div class="live-version">
                <a href="">See Source </a>
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

      const closeBtn = document.querySelector('.popup-clsbtn');
      closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}