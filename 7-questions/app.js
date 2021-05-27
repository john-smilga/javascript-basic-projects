const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  
  btn.addEventListener('click', () => {
    questions.forEach(sibling => {
      if (sibling !== question) {
        sibling.classList.remove('show-text');
      }
    });
    
    question.classList.toggle('show-text');
  });
});