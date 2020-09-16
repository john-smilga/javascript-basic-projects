//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
