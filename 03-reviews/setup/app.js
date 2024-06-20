
// local reviews data
const reviews = [
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


const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job'); 
const info = document.querySelector('#info'); 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//처음 item을 설정함
let currentItem = 0;

// load initial item,바로 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화!!
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  console.log('Dom 준비 완료!')
});

//공통 함수 
function showPerson(person){
  const item = reviews[person]
  img.src = item.img 
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent =item.text;
}



//next 버튼을 누르면 crrentItem은 +1
nextBtn.addEventListener('click', ()=>{

   currentItem += 1;
   if(currentItem > reviews.length -1){
    currentItem = 0;
   }
   showPerson(currentItem)

})

//prev 버튼을 누르면 crrentItem은 -1
prevBtn.addEventListener('click', ()=>{

  currentItem -= 1;
 if(currentItem < 0){
  currentItem = reviews.length -1;
 }
 showPerson(currentItem)

})

randomBtn.addEventListener('click', ()=>{
  currentItem = Math.floor(Math.random()* reviews.length);
  showPerson(currentItem)
});


