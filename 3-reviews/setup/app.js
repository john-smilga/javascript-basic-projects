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
function createUI(){
  reviews.forEach((review) => {
  let container = document.createElement('div');
  container.setAttribute('class', 'container');
  let title = document.createElement('div');
  title.setAttribute('class', 'title');
  let h2 = document.createElement('h2');
  let underline = document.createElement('div');
  underline.setAttribute('class', 'underline');
  title.appendChild(h2, underline);
  let article = document.querySelector('article');
  article.setAttribute('class', 'review');
  let imgCon = document.createElement('div');
  imgCon.setAttribute('class', 'img-container');
  let img = document.createElement('img');
  screen.scr = review.img;
  img.setAttribute('id', 'person-img');
  let h4 = document.createElement('h4');
  h4.setAttribute('id', 'author');
  let job = document.createElement('p');
  job.setAttribute('id', 'job');
  job.innerText = review.job;
  let info= document.createElement('p');
  info.setAttribute('id', 'info');
  info.innerText = review.info;
  imgCon.append(h4, job);
  let btncon = document.createElement('div');
  btncon.setAttribute('class', 'button-container');
  

  article(imgCon, info);

    
  })
}
