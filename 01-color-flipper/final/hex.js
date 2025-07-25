const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const resetBtn = document.getElementById("reset"); // NEW Reset button

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor.toUpperCase();
  document.body.style.backgroundColor = hexColor;
  btn.textContent = "Change Again!";
});

// Copy color to clipboard on click
color.addEventListener("click", function () {
  navigator.clipboard.writeText(color.textContent);
  showCopiedMessage(); // Custom message instead of alert
});

// Reset background color
resetBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#ffffff";
  color.textContent = "#FFFFFF";
  btn.textContent = "Change Color";
});

// Function to show copied message
function showCopiedMessage() {
  const message = document.createElement("div");
  message.textContent = "Color Copied!";
  message.className = "toast";
  document.body.appendChild(message);
  setTimeout(() => message.remove(), 1000);
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
