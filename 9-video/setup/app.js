// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');

switchBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('slide');
  
  if (e.currentTarget.classList.contains('slide')) {
    video.pause();
  } else {
    video.play();
  }
});


