const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#f15039 -> 16진수 색상 변수추가하기
const btn =  document.querySelector('.btn-hero')
const color = document.querySelector('.color')


btn.addEventListener('click', () =>{
   
    let hexColor = `#`
    
    for(let i = 0; i < 6; i++){
        hexColor +=  hex[Math.floor( Math.random() * hex.length)];
    }
    document.body.style.backgroundColor =  hexColor;
    color.innerText = hexColor;
})