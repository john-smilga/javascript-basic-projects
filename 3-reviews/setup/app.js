// local reviews data
const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let index = 0;
let nextBtn = document.querySelector('.next-btn');
let preBtn = document.querySelector('.prev-btn');
let btnCon = document.querySelector('.button-container');
let img = document.querySelector('#person-img');
let author = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');
let randomBtn = document.querySelector('.random-btn');

function ui() {
  img.src = reviews[index].img;
  author.innerHTML = reviews[index].name;
  job.innerHTML = reviews[index].job;
  info.innerHTML = reviews[index].text;

}
/*
function CardChange() {
  index = index + 1;
  ui()
  console.log(index, reviews.length-1);
}
function ChangeCard() {
  index = index - 1;
  ui();
  console.log(index);
}
*/
function ChangeCard(e) {
  if (e.target.classList.contains('fa-chevron-right')) {
    index = index + 1;
    if (index >= 0 && index < reviews.length) {
      ui()
    } else {
      index = 0;
      ui();
    }
  }

  if (e.target.classList.contains('fa-chevron-left')) {
   index = index - 1;
     if(index <= 0){
      index = reviews.length;
    }else{
      ui();
    }
  }
}

function surprise() {
  index = RandomReview();
  console.log(index);
  ui();
}

function RandomReview() {
  return Math.floor(Math.random() * reviews.length)
}
/*
nextBtn.addEventListener('click', CardChange);
preBtn.addEventListener('click', ChangeCard);
*/
btnCon.addEventListener('click', ChangeCard)
randomBtn.addEventListener('click', surprise);
ui();