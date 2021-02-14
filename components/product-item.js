// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(a, b, c){
    super();
    let shadow = this.attachShadow({mode: 'open'});
    var li = document.createElement('li');
    li.setAttribute('class', 'product');

    var img = document.createElement('img');
    img.src = a;
    img.alt = b;

    img.setAttribute('class', 'img');

    var title = document.createElement('p');
    title.innerHTML = b;

    title.setAttribute('class', 'title');


    function addZeroes(num) {
      return num.toFixed(2);
    }

    var dollar = addZeroes(c);
    var price = document.createElement('p');
    price.innerHTML = '$' + dollar.toString(); 



    price.setAttribute('class', 'price');
    

    var mixbut = document.createElement('button');
    mixbut.innerHTML = 'Add to Cart';
    var cartcount = document.getElementById('cart-count');
    mixbut.addEventListener('click', addTo);


    function addTo(){
      alert('Added to Cart');
      var count = parseFloat(cartcount.innerHTML);
      count = count + 1;
      cartcount.innerHTML = count.toString();
      mixbut.removeEventListener('click', addTo);
      mixbut.addEventListener("click", removeFrom);
      mixbut.innerHTML = 'Remove From Cart';
    }
    
    function removeFrom(){
      alert('Added to Cart');
      var count = parseFloat(cartcount.innerHTML);
      count = count - 1;
      cartcount.innerHTML = count.toString();
      mixbut.removeEventListener('click', removeFrom);
      mixbut.addEventListener("click", addTo);
      mixbut.innerHTML = 'Add to Cart';
    }    


    
    mixbut.setAttribute('class', 'button');


    let style = document.createElement('style');
    
    style.textContent = `
.price {
  color: green;
  font-size: 1.8em;
  font-weight: bold;
  margin: 0;
}

.product {
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-areas: 
  'image'
  'title'
  'price'
  'add';
  grid-template-rows: 67% 11% 11% 11%;
  height: 450px;
  filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
  margin: 0 30px 30px 0;
  padding: 10px 20px;
  width: 200px;
}

.button {
  background-color: rgb(255, 208, 0);
  border: none;
  border-radius: 5px;
  color: black;
  justify-self: center;
  max-height: 35px;
  padding: 8px 20px;
  transition: 0.1s ease all;
}

.button:hover {
  background-color: rgb(255, 166, 0);
  cursor: pointer;
  transition: 0.1s ease all;
}

.img {
  align-self: center;
  justify-self: center;
  width: 100%;
}

.title {
  font-size: 1.1em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title:hover {
  font-size: 1.1em;
  margin: 0;
  white-space: wrap;
  overflow: auto;
  text-overflow: unset;
}
    `;
    

    shadow.appendChild(style);
    shadow.appendChild(li);

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(mixbut);

  }
}

customElements.define('product-item', ProductItem);
