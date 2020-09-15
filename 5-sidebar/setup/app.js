const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? sidebar.classList.remove("show-sidebar") : false
);

/* if (sidebar.classList.contains("show-sidebar")) {
  document.addEventListener("click", (e) => console.log(e.target === sidebar));
} */
/* e.target !== sidebar ? sidebar.classList.remove("show-sidebar") : false */
/* if (!sidebar.contains(e.target)) {
      sidebar.classList.remove("show-sidebar"); */
/*   );
} */
