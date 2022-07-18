// Language Buttons
const esButton = document.querySelector('#ES')
const enButton = document.querySelector('#EN')
// Text Elements
const mainTitle = document.querySelector('#main-title')
const indexAnchor = document.querySelector('#index-anchor')
const indexMenuA = document.querySelector('#index-menu-a')
const projectsMenuA = document.querySelector('#projects-menu-a')

const hashValue = window.location.hash

if (hashValue) {
  indexAnchor.setAttribute('href', `./index.html${hashValue}`)
  indexMenuA.setAttribute('href', `./index.html${hashValue}`)
  projectsMenuA.setAttribute('href', `./portfolio.html${hashValue}`)
}

const esLanguage = {
  mainTitle: 'Desarrollo de software Plata',
  indexAnchor: 'Inicio',
  indexMenuA: 'Inicio',
  projectsMenuA: 'Proyectos',
}

const enLanguage = {
  mainTitle: 'Plata software development',
  indexAnchor: 'Home',
  indexMenuA: 'Home',
  projectsMenuA: 'Projects',
}

function changeLanguage(lang) {
  location.hash = lang
  location.reload()
}

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == '#es') {
    mainTitle.textContent = esLanguage.mainTitle
    indexAnchor.textContent = esLanguage.indexAnchor
    indexMenuA.textContent = esLanguage.indexMenuA
    projectsMenuA.textContent = esLanguage.projectsMenuA
  } else if (window.location.hash == '#en') {
    mainTitle.textContent = enLanguage.mainTitle
    indexAnchor.textContent = enLanguage.indexAnchor
    indexMenuA.textContent = enLanguage.indexMenuA
    projectsMenuA.textContent = enLanguage.projectsMenuA
  }
}
