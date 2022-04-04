const articles = document.querySelectorAll(".content");
const tabBtn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // do same for articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
