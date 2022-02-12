const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

switchBtn.addEventListener('click', (e) => {
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    video.pause();
  } else {
    switchBtn.classList.remove('slide');
    video.play();
  }
});

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});
