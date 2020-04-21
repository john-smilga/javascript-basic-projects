const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("selected");
    });
    e.target.classList.add("selected");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("selected");
    });
    const element = document.getElementById(id);
    element.classList.add("selected");
  }
});
