const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? sidebar.classList.remove("show-sidebar") : false
);

/* document.addEventListener("click", function (e) {
  if (!["sidebar", "links"].includes(e.target.id)) {
    sidebar.classList.remove("show-sidebar");
  }
}); */
