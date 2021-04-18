import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bruno Borges | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is,',
  name: 'Bruno',
  subtitle: 'I am a full stack web development student.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Web development student currently enrolled in the Uconn Coding Bootcamp Full-Stack program',
  paragraphTwo: 'Currently living in Connecitcut, with a passion for technology and digital media',
  paragraphThree: 'Experience with HTML, CSS, Javascript, and the Adobe Creative Suite.',
  resume: 'https://drive.google.com/file/d/1AA1TKO2di76jekwUs13zx977nD3ZQtNZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'MyCoolPlaylist',
    info: 'This app is a simple playlist app that allows users to search a large database of songs.',
    info2: 'Also allows users to view lyrics and provides them a youtube link.',
    url: '',
    repo: 'https://github.com/BrunoBBorges/Playlist-Creator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Budget Tracker',
    info: 'Simple app designed to allow the user to track expendatures',
    info2: 'Tracks transactions offline, and sends them to the db when back online',
    url: '',
    repo: 'https://github.com/BrunoBBorges/Budget-Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
