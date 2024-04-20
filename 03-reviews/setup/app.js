// local reviews data
const review = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let pointer=0;

const img = document.getElementById('person-img');
const auth = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nxtBtn = document.querySelector('.next-btn');
const rndmBtn = document.querySelector('.random-btn');

function showReview()
{
  const item = review[pointer];
  img.src = item.img;
  console.log(item.img);
  auth.textContent=item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', showReview);



nxtBtn.addEventListener('click',function(){
  pointer++;
  if(pointer==review.length)
  {
    pointer=0;
  }
  showReview();
});

prevBtn.addEventListener('click',function(){
  pointer--;
  if(pointer==-1)
  {
    pointer=review.length-1;
  }
  showReview();
});

rndmBtn.addEventListener('click',function(){
  pointer=Math.floor(Math.random()*review.length);
  showReview();
});




