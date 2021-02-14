// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
let ul = document.getElementById('product-list');
const url = 'https://fakestoreapi.com/products';


  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    localStorage.setItem('products', JSON.stringify(data));
    let prods = JSON.parse(localStorage.getItem('products'));
    //
    return prods.map(function(prod){
      let img = prod.image;
      let title = prod.title;
      let num = prod.price;
      let consume = new ProductItem(img, title, num);
      console.log(consume);
      ul.appendChild(consume);
    })
  })
});

