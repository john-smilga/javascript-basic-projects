let counterValue = 0;

const counter = document.getElementById("counter");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    const item = event.target;

    if (item.classList.contains("decrease")) {
      counterValue--;
    }
    if (item.classList.contains("increase")) {
      counterValue++;
    }
    counter.textContent = counterValue;
    if (counterValue < 0) {
      counter.style.color = "red";
    } else if (counterValue > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "#222";
    }
  });
});
