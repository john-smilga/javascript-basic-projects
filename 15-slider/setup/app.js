const slides = document.querySelectorAll('.slider');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index*100}$`;
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function() {
    counter--;
    carousel();
});

function carousel() {
    if(counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
    if(counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}
