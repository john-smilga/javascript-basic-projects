const sidebarBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

function toggleSideBar() {
  sidebar.classList.toggle("show-sidebar");
}

function closeSideBar() {
  sidebar.classList.remove("show-sidebar");
}

sidebarBtn.addEventListener("click", toggleSideBar);
closeBtn.addEventListener("click", closeSideBar);
