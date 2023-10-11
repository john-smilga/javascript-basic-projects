const value = document.querySelector("[value]");
const btns = document.querySelectorAll(".btn");

//initialize count
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.getAttribute("data-style");
    switch (style) {
      case "decrease":
        count--;
        break;
      case "increase":
        count++;
        break;
      default:
        count = 0;
    }
    if (count > 0) {
      value.classList.add("positive");
    } else if (count < 0) {
      value.classList.add("negative");
    } else {
      value.classList.remove("positive");
      value.classList.remove("negative");
    }
    total = count;
    value.textContent = total;
  });
});
