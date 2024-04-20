const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nxtBtn = document.querySelector('.nextBtn');
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
let counter =0;

nxtBtn.addEventListener('click',function(){
    counter++;
    carousel();
})

prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
})

function carousel()
{
    if(counter<slides.length -1)
    {
        nxtBtn.style.display = 'block';
    }
    else
    {
        nxtBtn.style.display = 'none';
    }
    if(counter>0)
    {
        prevBtn.style.display = "block";
    }
    else
    {
        prevBtn.style.display = "none";
    }




slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter*100}%)`
})
}

prevBtn.style.display = "none";