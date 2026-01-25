const productDOM = document.querySelector('.product');
const url = 'https://www.course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `
      <div class="loading-container">
        <div class="loading"></div>
        <p class="loading-text">Loading product details...</p>
      </div>
    `;
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
      throw new Error('Product ID is missing');
    }

    const response = await fetch(`${url}?id=${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `
      <div class="error">
        <p>Unable to load product</p>
        <p style="font-size: 0.9375rem; color: var(--textColorLight); margin-top: 0.5rem;">
          ${error.message || 'Please try again later or go back to browse other products.'}
        </p>
      </div>
    `;
    console.error('Error fetching product:', error);
    return null;
  }
};

const displayProduct = (product) => {
  if (!product || !product.fields) {
    productDOM.innerHTML = `
      <div class="error">
        <p>Product not found</p>
        <p style="font-size: 0.9375rem; color: var(--textColorLight); margin-top: 0.5rem;">
          The product you're looking for doesn't exist.
        </p>
      </div>
    `;
    return;
  }

  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  const formatPrice = (price / 100).toFixed(2);
  
  document.title = `${title} - Modern Store`;

  // Colors
  const colorsList = colors
    .map((color) => {
      return `
        <span 
          class="product-color" 
          style="background: ${color}"
          aria-label="Color: ${color}"
          title="${color}"
        ></span>
      `;
    })
    .join('');

  productDOM.innerHTML = `
    <div class="product-wrapper">
      <img 
        src="${img}" 
        class="img" 
        alt="${title}" 
        loading="eager"
      />
      <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span class="price">$${formatPrice}</span>
        <div class="colors">
          <span class="colors-label">Available Colors:</span>
          ${colorsList}
        </div>
        <p>${description}</p>
        <button class="btn" type="button" aria-label="Add ${title} to cart">
          Add to Cart
        </button>
      </div>
    </div>
  `;
};

const start = async () => {
  const data = await fetchProduct();
  if (data) {
    displayProduct(data);
  }
};

start();