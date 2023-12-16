let count =0;
const btn = document.querySelectorAll('.btn');
const val = document.querySelector('#value');

for(let i=0;i<btn.length;i++)
{
    const array = btn[i];
    array.addEventListener('click',function(){
        if(array.classList.contains('decrease'))
        {
            count--;
        }
        else if(array.classList.contains('increase'))
        {
            count++;
        }
        else
        {
            count=0;
        }
        val.textContent=count;
        if(count>0)
        {
            val.style.color='green';
        }
        else if(count<0)
        {
            val.style.color='red';
        }
        else
        {
            val.style.color='black';
        }
    })
   
}