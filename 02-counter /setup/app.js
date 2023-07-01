const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

let cnt = 0;



btns.forEach((btns)=>{ //버튼의 하나씩 돌면서 클린된 버튼에 값을 바꿔줌
    
    btns.addEventListener('click',(e)=>{//어떤 버튼이 클릭됐는지 알기위해 event속성 사용
    const list = e.currentTarget.classList;
   
    if(list.contains('decrease')){
        cnt -=1;
       
    }else if(list.contains('increase')){
        cnt += 1;
       
    }else{
        cnt  = 0;
        value.style.color = 'black'
    }
    if(cnt < 0 ){
        value.style.color = 'tomato';
    }else if(cnt > 0){
        value.style.color = 'green';
    }
    value.textContent = cnt;
    })

})
