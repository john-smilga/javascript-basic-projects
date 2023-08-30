let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');


btns.forEach(btn=>{
    let count = 0;
    btn.addEventListener('click',(e)=>{
        const target = e.currentTarget.classList;
        if(target.contains('decrease')){
            count--;
        }else if(target.contains('increase')){
            count++;
        }else{
            count==0;
        }
        if(count > 0){
            value.style.color = 'green';
        }else if(count == 0){
            value.style.color = 'black';
        }else{
            value.style.color = 'red';
        }
        value.innerHTML = count;
    })
})