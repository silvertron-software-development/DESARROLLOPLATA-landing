// Language Buttons
const esButton = document.querySelector('#ES')
const enButton = document.querySelector('#EN')
// Text Elements
const introTitle = document.querySelector('#intro-title')
const introDescription = document.querySelector('#intro-desc')
const middleTitle = document.querySelector('#middle-title')
const serviceTitle = document.querySelector('#service-title')
const webApps = document.querySelector('#web-apps')
const landing = document.querySelector('#landing')
const business = document.querySelector('#business-solutions')
const dataProducts = document.querySelector('#data-products')
const eCommerce = document.querySelector('#e-commerce')
const dataBullet = document.querySelector('#data')
const digitalMarketing = document.querySelector('#digital-marketing')
const socialMedia = document.querySelector('#social-media')
const processTitle = document.querySelector('#process-title')
const diagnostics = document.querySelector('#diagnostics')
const diagnosticsDesc = document.querySelector('#diagnostics-description')
const planningTitle = document.querySelector('#planning-title')
const planningDesc = document.querySelector('#planning-description')
const execution = document.querySelector('#execution-title')
const executionDesc = document.querySelector('#execution-description')
const finalTitle = document.querySelector('#final-title')
const medicalIndustry = document.querySelector('#medical-industry')
const saas = document.querySelector('#saas')
const education = document.querySelector('#education')
const techIndustry = document.querySelector('#tech-industry')
const moreIndustries = document.querySelector('#more-industries')
const contactTitle = document.querySelector('#contact-title')
const dateDiv = document.querySelector('#date')

const esLanguage = {
  introTitle: '¡Algo increible no se construye solo!',
  introDescription:
    'Partner de transformación y crecimiento digital para tu negocio',
  middleTitle: 'Lo que queremos decir con transformación y crecimiento digital',
  serviceTitle: 'Desarrollo de Software',
  webApps: 'Aplicaciones Web',
  landing: 'Landing Page',
  business: 'Soluciones Empresariales',
  dataProducts: 'Productos con datos',
  eCommerce: 'E-Commerce',
  dataBullet: 'Datos',
  digitalMarketing: 'Marketing digital enfocado al crecimiento',
  socialMedia: 'Manejo de Redes Sociales y anuncios pagados',
  processTitle: 'Nuestro Proceso',
  diagnostics: 'Diagnóstico',
  diagnosticsDesc:
    'Detectamos las necesidades operativas y administrativas de tu negocio',
  planningTitle: 'Plan',
  planningDesc:
    'Diseñamos un plan de trabajo con metodologías ágiles de desarrollo por plan mensual o anual',
  execution: 'Ejecución',
  executionDesc: 'Proponemos e implementamos tu solución',
  finalTitle: 'Industrias con las que trabajamos',
  medicalIndustry: 'Sector Médico',
  saas: 'Saas',
  education: 'Educación',
  techIndustry: 'Tecnología',
  moreIndustries: 'Muchas más',
  contactTitle: 'Contáctanos',
}
const enLanguage = {
  introTitle: 'Amazing projects are not built alone!',
  introDescription:
    'Digital growth and transformation partner for your business',
  middleTitle: 'What we mean with digital growth and transformation',
  serviceTitle: 'Software Development',
  webApps: 'Web Apps',
  landing: 'Landing Sites',
  business: 'Business Solutions',
  dataProducts: 'Data-built products',
  eCommerce: 'E-Commerce',
  dataBullet: 'Data',
  digitalMarketing: 'Digital marketing directed towards business growth',
  socialMedia: 'Social media managemente and paid ads',
  processTitle: 'Our process',
  diagnostics: 'Diagnostics',
  diagnosticsDesc:
    'Detecting operational and admisitrational needs of your business',
  planningTitle: 'Planning',
  planningDesc:
    'We design a workplan and schedule with agile methodologies for development, monthly or yearly plans',
  execution: 'Execution',
  executionDesc: 'We come up with your solutions and implement it',
  finalTitle: 'Industries we work with',
  medicalIndustry: 'Medical',
  saas: 'Saas',
  education: 'Educational',
  techIndustry: 'Technology',
  moreIndustries: 'Much More',
  contactTitle: 'Contact',
}

function changeLanguage(lang) {
  location.hash = lang
  location.reload()
}

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == '#es') {
    introTitle.textContent = esLanguage.introTitle
    introDescription.textContent = esLanguage.introDescription
    middleTitle.textContent = esLanguage.middleTitle
    serviceTitle.textContent = esLanguage.serviceTitle
    webApps.textContent = esLanguage.webApps
    landing.textContent = esLanguage.landing
    business.textContent = esLanguage.business
    dataProducts.textContent = esLanguage.dataProducts
    eCommerce.textContent = esLanguage.eCommerce
    dataBullet.textContent = esLanguage.dataBullet
    digitalMarketing.textContent = esLanguage.digitalMarketing
    socialMedia.textContent = esLanguage.socialMedia
    processTitle.textContent = esLanguage.processTitle
    diagnostics.textContent = esLanguage.diagnostics
    diagnosticsDesc.textContent = esLanguage.diagnosticsDesc
    planningTitle.textContent = esLanguage.planningTitle
    planningDesc.textContent = esLanguage.planningDesc
    execution.textContent = esLanguage.execution
    executionDesc.textContent = esLanguage.executionDesc
    finalTitle.textContent = esLanguage.finalTitle
    medicalIndustry.textContent = esLanguage.medicalIndustry
    saas.textContent = esLanguage.saas
    education.textContent = esLanguage.education
    techIndustry.textContent = esLanguage.techIndustry
    moreIndustries.textContent = esLanguage.moreIndustries
    contactTitle.textContent = esLanguage.contactTitle
  } else if (window.location.hash == '#en') {
    introTitle.textContent = enLanguage.introTitle
    introDescription.textContent = enLanguage.introDescription
    middleTitle.textContent = enLanguage.middleTitle
    serviceTitle.textContent = enLanguage.serviceTitle
    webApps.textContent = enLanguage.webApps
    landing.textContent = enLanguage.landing
    business.textContent = enLanguage.business
    dataProducts.textContent = enLanguage.dataProducts
    eCommerce.textContent = enLanguage.eCommerce
    dataBullet.textContent = enLanguage.dataBullet
    digitalMarketing.textContent = enLanguage.digitalMarketing
    socialMedia.textContent = enLanguage.socialMedia
    processTitle.textContent = enLanguage.processTitle
    diagnostics.textContent = enLanguage.diagnostics
    diagnosticsDesc.textContent = enLanguage.diagnosticsDesc
    planningTitle.textContent = enLanguage.planningTitle
    planningDesc.textContent = enLanguage.planningDesc
    execution.textContent = enLanguage.execution
    executionDesc.textContent = enLanguage.executionDesc
    finalTitle.textContent = enLanguage.finalTitle
    medicalIndustry.textContent = enLanguage.medicalIndustry
    saas.textContent = enLanguage.saas
    education.textContent = enLanguage.education
    techIndustry.textContent = enLanguage.techIndustry
    moreIndustries.textContent = enLanguage.moreIndustries
    contactTitle.textContent = enLanguage.contactTitle
  }
}
