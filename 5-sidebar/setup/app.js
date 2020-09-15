const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.getElementById("sidebar");
let isSidebarOpen = false;

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
  isSidebarOpen = true;
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

document.addEventListener("click", (event) =>
  event.target === sidebar ? sidebar.classList.remove("show-sidebar") : false
);

/* document.addEventListener("click", (e) => {
  if (e.target !== sidebar && !sidebar.contains(e.target)) {
    console.log("Clicking outside the sidebar");
    sidebar.classList.remove("show-sidebar");
  }
}); */

/* while (isSidebarOpen) {
  document.addEventListener("click", (event) => {
    if (event.target !== sidebar && !sidebar.contains(event.target)) {
      console.log("Clicking outside the sidebar");
      sidebar.classList.remove("show-sidebar");
    }
  });
} */

/* document.addEventListener("click", (event) => {
  if (event.target !== sidebar && !sidebar.contains(event.target)) {
    console.log("Clicking outside the sidebar");
    sidebar.classList.remove("show-sidebar");
  } */

/* if (sidebar.classList.contains("show-sidebar")) {
  document.addEventListener("click", (event) => {
    if (event.target !== sidebar && !sidebar.contains(event.target)) {
      console.log("clicking outside the div");
      sidebar.classList.remove("show-sidebar");
    }
  });
} */

document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? sidebar.classList.remove("show-sidebar") : false
);

/* function  */
/* sidebar.addEventListener("click", (event) =>
  console.log(event.currentTarget === sidebar)
); */
/*  !event.target.parentNode.classList.contains("sidebar")
    ? sidebar.classList.remove("show-sidebar")
    : false */
/*  if (sidebar.classList.contains("show-sidebar")

});

/* document.addEventListener("click", (event) => console.dir(event.target)); */

/* if (sidebar.classList.contains("show-sidebar")) {
  document.addEventListener("click", (event) => sidebar !== event.target ? sidebar.classList.remove("show-sidebar"): false;
}
 */

/* if (sidebar.classList.contains("show-sidebar")) {
  document.addEventListener("click", (event) => {
    const isClickInside = sidebar.contains(event.target);
    console.log(isClickInside);
    if (!isClickInside) {
      sidebar.classList.remove("show-sidebar");
    }
  });
} */

/* if (sidebar.classList.contains("show-sidebar")) {
  document.addEventListener("click", (e) => console.log(e.target === sidebar));
} */
/* e.target !== sidebar ? sidebar.classList.remove("show-sidebar") : false */
/* if (!sidebar.contains(e.target)) {
      sidebar.classList.remove("show-sidebar"); */
/*   );
} */
