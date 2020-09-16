//using selectors inside the element
const questions = document.querySelectorAll(".question");
const awesomeIcons = document.getElementById("awesome");

/* function toggleIcon(element, awesomeIconName1, awesomeIconName2) {
  element.className === awesomeIconName1
    ? (element.className = awesomeIconName2)
    : (element.className = awesomeIconName1);
} */

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      item !== question ? item.classList.remove("show-text") : false;
    });
    question.classList.toggle("show-text");
    /* toggleIcon(awesome, "fas fa-chevron-down", "fas fa-chevron-up"); */
  });
});

document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? question.classList.remove("show-sidebar") : false
);

// traversing the dom

/* const btns = document.querySelectorAll(".question-btn");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */
