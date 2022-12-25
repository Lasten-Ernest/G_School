const buttonToggle = document.querySelector('.humburgermenu');
const navbarMenuLink = document.querySelector('#navbarmenu');
const navbarLink = document.querySelectorAll('.navbarlinks');

buttonToggle.addEventListener('click', () => {
  navbarMenuLink.classList.toggle('active');
});

navbarLink.forEach((navbarLink) => navbarLink.addEventListener('click', () => {
  navbarMenuLink.classList.remove('active');
}));

const speakers = [
  {
    class: 'lasten-img',
    name: 'Dr. E. Lasten',
    personality: 'Computer studies teacher ',
    image: './img/lasten.jpg',
    alt: 'image for lasten',
    description: 'He has worked with the youth for 20 decade. He holds a doctrate degree in theology.',
  },
  {
    class: 'liwonde-img',
    name: 'Mr. Chanza',
    personality: 'Head of academics',
    image: './img/liwonde.jpg',
    alt: 'Mr. liwonde image',
    description: 'He .......the students at Grema',
  },
  {
    class: 'masuso-img',
    name: 'Mr. Luke Masuso',
    personality: 'Mr. Luke masuso, ....................',
    image: './img/masu.jpeg',
    alt: 'luke',
    description: 'He ............................',
  },
  {
    class: 'ernest-img',
    name: 'Ernest Lasten',
    personality: 'Here is the .',
    image: './img/Ernest.jpg',
    alt: 'Ernest',
    description: 'Description.',
  },
  {
    class: 'alick-img',
    name: 'Dr. Alick Elia',
    personality: 'Chief of Technicians at Business Machines, Malawi.',
    image: './img/melina.jpeg',
    alt: 'alick',
    description: 'Dr. A. Elia is a ',
  },
  {
    class: 'limited-img',
    name: 'Limited Bravo',
    personality: 'Mr. L. Bravo, chief of staff and students mentor at YCI',
    image: './img/limit.jpeg',
    alt: 'limited',
    description: 'Mr. Limited is th many years.',
  },
];

const speakersContainer = document.querySelector('.gridofspeakers');

function createSpeakers() {
  const len = speakers.length;
  for (let i = 0; i < len; i += 1) {
    const speaker = speakers[i];

    speakersContainer.innerHTML += `
      <div class="speakers-card">
        <div class="col-1 col">
          <div class="image-container">
          <img class= ${speaker.class} src="${speaker.image}" alt=${speaker.alt}>
          <div class="chess-bg">
              </div>
          </div>
          <div class="aboutspeaker">
            <h3 class="speakername">${speaker.name}</h3>
            <p class="personality">${speaker.personality}</p>
            <p class="description">${speaker.description}</p>
          </div>
        </div>
      </div>`;
  }
}

createSpeakers();
