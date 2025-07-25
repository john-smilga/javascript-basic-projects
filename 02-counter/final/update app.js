// Counter App - Modified Version for Contribution

let counterValue = 0; // Start with 0

// Select value display and all buttons
const valueDisplay = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Function to update color based on value
const updateColor = () => {
  valueDisplay.style.color = counterValue > 0 ? "green" :
                             counterValue < 0 ? "red" : "#222";
};

// Function to update the display with animation
const updateDisplay = () => {
  valueDisplay.textContent = counterValue;
  valueDisplay.style.opacity = "0.5";
  setTimeout(() => (valueDisplay.style.opacity = "1"), 150);
};

// Event listener for buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const classes = e.currentTarget.classList;

    if (classes.contains("decrease")) counterValue--;
    else if (classes.contains("increase")) counterValue++;
    else counterValue = 0;

    updateColor();
    updateDisplay();
  });
});
