const url = 'https://www.course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  productsDOM.innerHTML = `
    <div class="loading-container">
      <div class="loading"></div>
      <p class="loading-text">Loading products...</p>
    </div>
  `;
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `
      <div class="error">
        <p>Oops! Something went wrong</p>
        <p style="font-size: 0.9375rem; color: var(--textColorLight); margin-top: 0.5rem;">
          Unable to load products. Please try again later.
        </p>
      </div>
    `;
    console.error('Error fetching products:', error);
    return null;
  }
};

const displayProducts = (list) => {
  if (!list || list.length === 0) {
    productsDOM.innerHTML = `
      <div class="error">
        <p>No products found</p>
        <p style="font-size: 0.9375rem; color: var(--textColorLight); margin-top: 0.5rem;">
          Please check back later for new products.
        </p>
      </div>
    `;
    return;
  }

  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = (price / 100).toFixed(2);
      
      return `
        <a class="single-product" href="product.html?id=${id}" aria-label="View ${title}">
          <img 
            src="${img}" 
            class="single-product-img img" 
            alt="${title}" 
            loading="lazy"
          />
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
          </footer>
        </a>
      `;
    })
    .join('');
  
  productsDOM.innerHTML = `
    <div class="products-container">
      ${productList}
    </div>
  `;
};

const start = async () => {
  const data = await fetchProducts();
  if (data) {
    displayProducts(data);
  }
};

start();