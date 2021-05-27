import subLinks from './data.js';

const sideBarWrapper = document.querySelector('.sidebar-wrapper');
const toggleBtn = document.querySelector('.toggle-btn');
const sideBarCloseBtn = sideBarWrapper.querySelector('.close-btn');
const sideBarLinks = sideBarWrapper.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');

toggleBtn.addEventListener('click', () => {
  sideBarWrapper.classList.add('show');
});

sideBarCloseBtn.addEventListener('click', () => {
  sideBarWrapper.classList.remove('show');
});

sideBarLinks.innerHTML = subLinks.map((link) => {
  const { page, links } = link;
  
  return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
      ${links.map(({ icon, url, label}) => {
        return `<a href="${url}">
          <i class="${icon}"></i>
          ${label}
        </a>`
      }).join('')}
    </div>
  </article>`;
}).join('');

linkBtns.forEach(link => link.addEventListener('mouseover', (e) => {
  const text = e.currentTarget.textContent;
  const coords = e.currentTarget.getBoundingClientRect();
  const center = (coords.right + coords.left) / 2;
  const bottom = coords.bottom - 3;
  
  const content = subLinks.find(({ page }) => page === text);
  let col = 'col-2';
  
  if (content.links.length === 3) {
    col = 'col-3';
  }
  
  if (content.links.length > 3) {
    col = 'col-4';
  }
  
  if (content) {
    const { page, links } = content;
    submenu.classList.add('show');
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class="submenu-center ${col}">
        ${links.map(({ icon, url, label}) => {
          return `<a href="${url}">
            <i class="${icon}"></i>
            ${label}
          </a>`
        }).join('')}
      </div>
    </section>`;
  }
}));

linkBtns.forEach(link => link.addEventListener('mouseout', () => submenu.classList.remove('show')));
