// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

window.addEventListener('DOMContentLoaded', function() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('preloader');
    img.setAttribute('src', './preloader.gif')
    img.setAttribute('alt', 'Preloader')
    div.appendChild(img);
    document.body.appendChild(div);
});

window.addEventListener('load', function() {
    document.querySelector('.preloader').classList.add('hide-preloader');
});

switchBtn.addEventListener('click', function() {
    this.classList.toggle('slide');
    (this.classList[1] === 'slide') ? video.pause() : video.play();
});
