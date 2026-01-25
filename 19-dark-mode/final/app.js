const toggleSwitch = document.querySelector('#theme-toggle');
const articlesContainer = document.querySelector('.articles');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
  toggleSwitch.checked = true;
}

// Toggle theme and save preference
toggleSwitch.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-theme');
  const theme = document.documentElement.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  localStorage.setItem('theme', theme);
});

// Display articles
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;