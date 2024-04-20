## Dad Jokes Project

#### HTML Structure

- div.container
  - button.btn
  - p.result(dummy text)

#### External Data

- the main idea the same, just external data

#### What is an API?

[What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

- https://www.course-api.com/javascript-store-products
- get store products

- https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog
- get single store product

- https://randomuser.me/api/
- random user

#### Docs

- important
- search engine
- test in the browser

#### Dad Jokes Docs

- [Dad Jokes](https://icanhazdadjoke.com/api)

- random joke
- https://icanhazdadjoke.com/

#### Select Elements

- select btn, result
- check if both elements selected
- listen for click events

#### FetchDadJoke Function

- create async function
- setup fetch
- set result.textContent = joke

```js
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
```

#### Loading

- set result equal to - 'Loading...'

#### Error Handling

- try/catch block
- set result equal to - 'There was an error..'

#### Check Status

- Fetch - only throws an error if cannot resolve
- Error response still a response
- check response.ok property
- throw new Error('Whoops!')
