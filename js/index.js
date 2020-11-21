const h1 = document.querySelector('h1');
h1.innerText += ' From JavScript';
// h1.hidden = true;
// const blink = document.querySelector('.blink');
// setInterval( () => blink.hidden = !blink.hidden, 100);


// CLOCK
const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000);

// // TIMER
// const countdown = document.querySelector('.countdown');
// const targetTime = new Date();
// targetTime.setSeconds(targetTime.getSeconds() + 10);

// setInterval(() => {
//   const left = targetTime.getSeconds() - new Date().getSeconds();
//   if(left > 0 ) {
//     countdown.innerText = left;
//   } else {
//     document.querySelector('body').hidden = true;
//   }
// }, 1000);

// PRODUCT LIST

const productsJson = 
`[
  {"name": "iPhoneX", "price": 1000},
  {"name": "Huawei Mate 40", "price": 2000},
  {"name": "Google Pixel", "price": 500}
]`;
const productsContainer = document.querySelector('.product-list');
const products = JSON.parse(productsJson);
for (const product of products) {
  productsContainer.innerHTML += 
    `<div>${product.name}: ${product.price}</div>`;
}

// ADD PRODUCT
function addProduct(ev) {
  ev.preventDefault();
  const name = document.querySelector('.product-name').value;
  const price = document.querySelector('.product-price').value;
  if (name === '' || price === '') return;
  productsContainer.innerHTML += 
    `<div>${name}: ${price}</div>`;
}

document.querySelector('.btn-add').addEventListener('click', addProduct);



