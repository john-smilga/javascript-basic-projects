const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');
productsDOM.innerHTML = `<div class="loading"></div>`;

const fetchProducts = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">There was a problem loading the products. Please try again later.</p>`;
  }
};

const displayProducts = (list = []) => {
  const productList = list
    .map((product) => {
      // tons of different ways to achieve the same result
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a class="single-product" href="product.html?id=${id}">
          <img
            src="${img}"
            class="single-product-img img"
            alt="${title}"
          />
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
          </footer>
        </a>`;
    })
    .join('');

  productsDOM.innerHTML = `<div class="products-container">
  ${productList}
  </div>`;
};

const startApp = async () => {
  const products = await fetchProducts();
  displayProducts(products);
};

startApp();
