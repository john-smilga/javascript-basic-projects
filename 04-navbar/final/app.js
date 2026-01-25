// Enhanced Navbar Functionality

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const mobileOverlay = document.querySelector(".mobile-overlay");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.body;

// Toggle mobile menu
function toggleMenu() {
  const isOpen = links.classList.contains("show-links");
  
  links.classList.toggle("show-links");
  mobileOverlay.classList.toggle("show");
  navToggle.classList.toggle("active");
  
  // Update aria attributes for accessibility
  navToggle.setAttribute("aria-expanded", !isOpen);
  
  // Prevent body scroll when menu is open (mobile)
  if (!isOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

// Close mobile menu
function closeMenu() {
  links.classList.remove("show-links");
  mobileOverlay.classList.remove("show");
  navToggle.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
  body.style.overflow = "";
}

// Event Listeners
navToggle.addEventListener("click", toggleMenu);

// Close menu when clicking overlay
mobileOverlay.addEventListener("click", closeMenu);

// Close menu when clicking a link (mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 800) {
      closeMenu();
    }
  });
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth >= 800) {
      closeMenu();
    }
  }, 250);
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
  lastScroll = currentScroll;
});

// Set active link based on current page
function setActiveLink() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkPath = link.getAttribute("href");
    
    if (linkPath === currentPage || 
        (currentPage === "" && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });
}

// Initialize active link on load
setActiveLink();

// Close menu on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("show-links")) {
    closeMenu();
    navToggle.focus(); // Return focus to toggle button
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});
