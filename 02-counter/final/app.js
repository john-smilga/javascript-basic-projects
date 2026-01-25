// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "var(--clr-green-dark)";
    }
    if (count < 0) {
      value.style.color = "var(--clr-red-dark)";
    }
    if (count === 0) {
      value.style.color = "var(--clr-primary-2)";
    }
    value.textContent = count;
    // animate value change
    value.classList.remove("pop");
    // reflow to restart animation
    void value.offsetWidth;
    value.classList.add("pop");
  });
});

// theme toggle: toggles alternate palette on body[data-theme="alt"]
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isAlt = body.getAttribute("data-theme") === "alt";
    if (isAlt) {
      body.removeAttribute("data-theme");
      themeToggle.setAttribute("aria-pressed", "false");
    } else {
      body.setAttribute("data-theme", "alt");
      themeToggle.setAttribute("aria-pressed", "true");
    }
  });
}
