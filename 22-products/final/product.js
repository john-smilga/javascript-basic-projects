const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem loading the product. Please try again later.</p>`;
  }
};

const displayProduct = (product) => {
  console.log(product);
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];

  // set page title
  document.title = title.toUpperCase();

  const colorsList = colors
    .map((colorValue) => {
      return `<span class="product-color" style="background-color:${colorValue}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img
          src="${img}"
          class="img"
          alt=""
        />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const startApp = async () => {
  const product = await fetchProduct();
  displayProduct(product);
};

startApp();
