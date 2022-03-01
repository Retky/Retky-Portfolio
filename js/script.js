const burger = document.getElementById('menuBar');
const menu = document.querySelector('.burguer_list');
let menuClick = 0;

burger.addEventListener('click', () => {
  menu.classList.toggle('moveIn');
  menuClick += 1;
  if (menuClick % 2 !== 0) {
    burger.src = 'img/Close.png';
  } else {
    burger.src = 'img/Menu.png';
    menuClick = 0;
  }
});

menu.addEventListener('click', () => {
  menu.classList.remove('moveIn');
  burger.src = 'img/Menu.png';
  menuClick = 0;
});

// ↓POPUP WINDOWS↓

// ↓ This is the basic Project Data Object.
class ProjectBox {
  constructor(name, tech, img, desc, live, src) {
    this.name = name;
    this.techs = tech;
    this.image = img;
    this.description = desc;
    this.live = live;
    this.source = src;
  }
}

// ↓ This holds the data of the first project.
const projectOne = new ProjectBox(
  'Multi Post Stories',
  ['html', 'Bootstrap', 'Ruby on rails'],
  'img/Snapshoot.png',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  '#',
  'https://github.com',
);

// ↓Function to create the boxes
function project(project){
  let blurDiv = document.createElement('div');
  blurDiv.classList.add('popBlur');
  let divBox = document.createElement('div');
  divBox.classList.add('popWindow');
  blurDiv.appendChild(divBox);
  // TITLE
  let projectName = document.createElement('h3');
  projectName.innerHTML = project.name;
  divBox.appendChild(projectName);
  // LIST
  let techList = document.createElement('ul');
  techList.classList.add('languages');
  divBox.appendChild(techList);
  project.techs.forEach((lang) => {
    let li = document.createElement('li');
    li.innerHTML = lang;
    li.classList.add('featLang');
    techList.appendChild(li);
  });
  // IMAGE
  let divImg = document.createElement('div');
  divBox.appendChild(divImg);
  let image = document.createElement('img')
  image.src = project.image;
  image.style.width = '100%';
  divImg.appendChild(image);
  //DESCRIPTION
  let divDesc = document.createElement('div');
  divDesc.innerHTML = project.description;
  divBox.appendChild(divDesc);
    // ↓ insert in the page
    document.body.appendChild(blurDiv);
}

// ↓ Ejecution
project(projectOne)
