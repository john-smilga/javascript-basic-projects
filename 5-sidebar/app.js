const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

function toggleSidebar() {
  sidebar.classList.toggle('show-sidebar');
}

sidebarToggle.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);