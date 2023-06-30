const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn =  document.querySelector('.btn-hero')
const color = document.querySelector('.color')
 //버튼을 누르면 color의 innerText부분이 바뀔것, backgroundColor가 바뀔것
btn.addEventListener('click', () =>{
    
    const randomNumber = Math.floor(Math.random() * colors.length);
    //console.log(randomNumber)
    document.body.style.backgroundColor =  colors[randomNumber]
    color.textContent = colors[randomNumber];
    
})

