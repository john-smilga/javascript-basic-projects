const date = document.getElementById('date');
const navBtn = document.querySelector('.nav-toggle');
const linksWrapper = document.querySelector('.links-container');
const links = document.querySelector('.links');
const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

date.innerHTML = new Date().getFullYear();

navBtn.addEventListener('click', () => {
  const wrapper = linksWrapper.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if (wrapper === 0) {
    linksWrapper.style.height = `${linksHeight}px`;
  } else {
    linksWrapper.style.height = 0;
  }
});

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
  
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

scrollLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  
  const navHeight = nav.getBoundingClientRect().height;
  const wrapper = linksWrapper.getBoundingClientRect().height;
  const fixedNav = nav.classList.contains('fixed-nav');
  let position = element.offsetTop - navHeight;
  
  if (!fixedNav) {
    position = position - navHeight;
  }
  
  if (navHeight > 82) {
    position = position + wrapper;
  }
  
  window.scrollTo({
    left: 0,
    top: position
  });
  
  linksWrapper.style.height = 0;
}));