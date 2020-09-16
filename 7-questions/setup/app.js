//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", (params) => {
    questions.forEach((item) => {
      item !== question ? item.classList.remove("show-text") : false;
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom

/* const btns = document.querySelectorAll(".question-btn");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */
