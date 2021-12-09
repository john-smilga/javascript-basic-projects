// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const name = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const randomBtn = document.querySelector('.random-btn');
const shiftBtn = document.querySelector('.button-container');
const len = reviews.length;
let idPerson = 0;

img.setAttribute('src', reviews[0].img);
name.textContent = reviews[0].name;
job.textContent = reviews[0].job;
info.textContent = reviews[0].text;

function setPerson(num) {
    img.setAttribute('src', reviews[num].img);
    name.textContent = reviews[num].name;
    job.textContent = reviews[num].job;
    info.textContent = reviews[num].text;
    idPerson = (reviews[num].id)-1;
}

shiftBtn.addEventListener('click', function(event) {
    const btn = ['fa-chevron-left', 'fa-chevron-right'];
    if(event.target.classList[1] === btn[0]) {
        if(idPerson < 0) {
            idPerson = len;
            idPerson--;
            setPerson(idPerson);
        }
        setPerson(idPerson);
        idPerson--;
    }
    if(event.target.classList[1] === btn[1]) {
        if(idPerson === (len)) {
            idPerson = 0;
            setPerson(idPerson);
        }
        setPerson(idPerson);
        idPerson++;
    }
});

randomBtn.addEventListener('click', function() {
    let random = Math.floor(Math.random()*reviews.length);
    setPerson(random);
});
