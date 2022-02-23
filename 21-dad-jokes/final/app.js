const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'learning app',
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};

fetchDadJoke();
