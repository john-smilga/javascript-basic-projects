// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preLoader = document.querySelector(".preloader");

const hidePreLoader = () => {
  preLoader.classList.add("hide-preloader");
};

video.addEventListener("timeupdate", () => {
  video.currentTime >= 13.25 ? (video.currentTime = 0) : null;
});
video.play();

const playVideo = () => {
  switchBtn.classList.toggle("slide");
  if (!switchBtn.classList.contains("slide")) video.play();
  else video.pause();
};
window.addEventListener("load", hidePreLoader);
switchBtn.addEventListener("click", playVideo);
