const btns = document.querySelectorAll(".btn");
const counter = document.querySelector("#value");
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("decrase")) {
      count--;
    }
    if (e.currentTarget.classList.contains("reset")) {
      count = 0;
    }
    if (e.currentTarget.classList.contains("increase")) {
      count++;
    }
    if (count > 0) {
      counter.style.color = "green";
    } else if (count === 0) {
      counter.style.color = "#222";
    } else {
      counter.style.color = "red";
    }
    counter.textContent = count;
  });
});
