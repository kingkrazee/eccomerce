let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



//products
function createItem(id, name, category, image, description, quantity,price){
  this.id = id;
  this.name = name;
  this.category = category;
  this.image = image;
  this.description = description;
  this.quantity = quantity;
  this.price = price;
}
const item1 = new createItem(1, 'Nike P-6000', 'Shoes',
'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-ec0d69e5-4700-48e7-810a-20f1d8249316/p-6000-shoes-zxj309.png'
,'A mash-up of Pegasus past, the Nike P-6000 delivers an early-2000s look with breathable mesh and synthetic overlays. Vibrant colours give it a modern look while its sporty aesthetic features foam cushioning for all-day comfort.',
1,29.99);
const item2 = new createItem(2, 'Denim Jeans', 'Clothing', 'https://valentino-cdn.thron.com/delivery/public/image/valentino/73914800-6b03-46af-bb95-62870c0fe034/ihqstx/std/500x0/DENIM-TROUSERS?quality=80&size=35&format=auto',
'Slim-fit denim jeans for men, made with premium cotton',1, 49.99);
const item3 = new createItem(3, 'Wireless Headphones', 'Electronics', 'https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000008913700_1348Wx2000H_202203101723284.jpeg',
'Noise-canceling wireless beats headphones with up to 20 hours of battery life',1, 129.99);
const item4 = new createItem(4, 'The Great Gatsby', 'Books', 'https://images-fe.ssl-images-amazon.com/images/I/71X7HnBk6VL._AC_UL600_SR600,600_.jpg',
'The latest bestselling novel by a renowned author',1, 14.99);
const item5 = new createItem(5, 'Hoodie', 'Clothing', 'https://hoodiessouthafrica.co.za/wp-content/uploads/PinkHoodie.png',
'Very comfortable pink hoodie',1, 39.99);
let items = [item1, item2, item3, item4, item5]
let main = document.querySelector('main');
localStorage.setItem('items', JSON.stringify('items'));
items.forEach(item => {
  main.innerHTML += `
  <div>
  <img src="${item.image}">
  <p>R${item.price}</p>
  <button id="viewMore">View More</button>
  <button class="purchase" value="${item.id}">Purchase</button>
  </div>
  `
});
let purcItems = []
let purcBtns = document.querySelectorAll('.purchase');
function addTocart(id){
  let [item] = items.filter(object => object.id === +id); // or let item = items.filter(object => object.id === +id)[0] you could also use find,which gets the first one
  purcItems.push(item);
  localStorage.setItem('cart',JSON.stringify(purcItems));
}
purcBtns.forEach(button =>{
  button.addEventListener('click',(event)=>{
      addTocart(event.target.value);
  })
})


