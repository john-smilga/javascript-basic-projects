//METHOD-1:using selectors inside the element

const questions = document.querySelectorAll(".question")

for(let i=0;i<questions.length;i++)
{
    const question = questions[i];

    question.addEventListener('click',function(){
        for(let j=0;j<questions.length;j++)
        {
            const q=questions[j];
            if(q!==question)
            q.classList.remove('show-text');
        }
        question.classList.toggle('show-text');
    })
    
}




//METHOD-2: traversing the dom

//const btns = document.querySelectorAll('.question-btn');

// for(let i=0;i<btns.length;i++)
// {
//     const btn=btns[i];
//     btn.addEventListener("click",function(e){
//         const question = (e.currentTarget.parentElement.parentElement);
//         question.classList.toggle('show-text')

//     })
// }
