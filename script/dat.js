//  //My Products 
//  function createItem(id, name, category, image, description, quantity, price){
//     this.id = id;
//     this.name = name;
//     this.category = category;
//     this.image = image;
//     this.description = description;
//     this.quantity = quantity;
//     this.price = price;
//  }

//  const item1 = new createItem(1, 'Inferno', 'Hoodie','https://kingkrazee.github.io/eccomerce/images/hood.png','A bright red masterpiece only for comfort',1, 100.00);
//  const item2 = new createItem(1, 'Abyss','Hoodie', 'https://kingkrazee.github.io/eccomerce/images/hoodies.png','So comfortable you will get lost in it',1, 100.00);
//  const item3 = new createItem(1, 'Blank Space', 'Hoodies','https://kingkrazee.github.io/eccomerce/images/plain hood.jpg', 'Two wongs dont make a white, but we do and its comfy', 1, 100.00);
//  const item4 = new createItem(1,'Klassik Mahn','Suits','https://kingkrazee.github.io/eccomerce/images/suit3.png','You can be me when you look this clean', 1, 1500.00);
//  const item5 = new createItem(1,'Golden Hour','Suits','https://kingkrazee.github.io/eccomerce/images/suit5.webp','The perfect time to shine', 1, 1500.00);
//  const item6 = new createItem(1, 'Flower Boy','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','I can buy myself flowers', 1, 1500.00);
//  let items = [item1, item2, item3, item4, item5, item6]
//  let main = document.getElementById('boughting');
//  localStorage.setItem('items',JSON.stringify('items'));
//  items.forEach(item => {
//     main.innerHTML += `
//     <div>
//     <img src="${item.image}">
//     <p>R${item.price}</p>
//     <button id="View">View More</button>
//     <button class="buy" value=${item.id}>Purchase</button>
//     </d>`
//  });
//  let buyItems = JSON.parse(localStorage.getItem('cart'))||[];
//  let buyBtns = document.querySelectorAll('.buy');
//  function addTocart(id){
//     let [item] = items.filter(object => object.id === +id)
//     let existingItemIndex = buyItems.findIndex(item => item.id === itemToAdd.id);
//     if (existingItemIndex !== -1){
//         buyItems[existingItemIndex].quantity++;
//     }else {
//         itemToAdd.quantity = 1;
//         buyItems.push(itemToAdd);
//     }
//     localStorage.setItem('cart', JSON.stringify(buyItems))

//  }
//  buyBtns.forEach(button =>{
//     button.addEventListener('click',(event)=>{
//         addTocart(event.target.value);
//     })
//  })


// {
//    productName: "Inferno",
//    category: "Hoodie",
//    Amount: 150.00,
//    img_url: "https://kingkrazee.github.io/eccomerce/images/hood.png"
//    },
//    {
//        productName: "Abyss",
//        category: "Hoodie",
//        Amount: 150.0,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/hoodies.png"
       
//    },
//    {
//        productName: "Blank Space",
//        category: "Hoodie",
//        Amount: 150.0,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/plain hood.jpg"
//    },
//    {
//        productName: "Sandy",
//        category: "Hoodie",
//        Amount: 150.0,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/hoodie5.webp"
//    },
//    {
//        productName: "Blui",
//        category: "Hoodie",
//        Amount: 150.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/hoodie4.png"
//    },
//    {
//        productName: "Greenie",
//        category: "Crew Neck",
//        Amount: 100.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/crew5.jpeg"
//    },
//    {
//        productName: "Ashy",
//        category: "Crew Neck",
//        Amount: 100.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck2.png"
//    },
//    {
//        productName: "Darkseid",
//        category: "Crew Neck",
//        Amount: 100.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck3.webp"

//    },
//    {
//        productName: "Beijing",
//        category: "Crew Neck",
//        Amount: 100.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/crew4.jpg"
       
//    },
//    {
//        productName: "Vamp",
//        category: "Crew Neck",
//        Amount: 100.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck1.jpg"
       

//    },
//    {
//        productName: "Dicky",
//        category: "Sweat Pants",
//        Amount: 120.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/sweats3.webp"
//    },
//    {
//        productName: "Eclipse",
//        category: "Sweat Pants",
//        Amount: 120.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/sweats2.jpg"
       

//    },
//    {
//        productName: "Rooi",
//        category: "Sweat Pants",
//        Amount: 120.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/sweats1.jpg"
//    },
//    {
//        productName: "Pinky",
//        category: "Sweat Pants",
//        Amount: 120.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/sweats4.webp"
//    },
//    {
//        productName: "Army",
//        category: "Sweat Pants",
//        Amount: 120.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/sweats5.webp"
//    },
//    {
//        productName: "Flower Boy",
//        category: "Suit",
//        Amount: 1500.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/suit4.webp"
//    },
//    {
//        productName: "Golden Gates",
//        category: "Suit",
//        Amount: 1500.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/suit5.webp"
//    },
//    {
//        productName: "Greener",
//        category: "Suit",
//        Amount: 1500.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/suit6.webp"
//    },
//    {
//        productName: "Sleak",
//        category: "Suit",
//        Amount: 1500.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/suit7.png"
//    },
//    {
//        productName: "Klassik Mahn",
//        category: "Suit",
//        Amount: 1500.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/suit3.png"
//    },
//    {
//        productName: "Ocean",
//        category: "Golfer",
//        Amount: 80.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/golf1.jpg"
//    },
//    {
//        productName: "Lava",
//        category: "Golfer",
//        Amount: 80.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/golf2.jpg"
//    },
//    {
//        productName: "Magenta",
//        category: "Golfer",
//        Amount: 80.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/golf3.jpg"
//    },
//    {
//        productName: "Ice",
//        category: "Golfer",
//        Amount: 80.00,
//        img_url: "https://kingkrazee.github.io/eccomerce/images/golf4.jpg"
//    }
// ]
// )
// )
//Code for everytime you add a recent product
function recentProducts(){
let latestProducts = products.reverse().slice(0, 4);
console.log(latestProducts);
latestProducts.forEach(product => {
wrapper.innerHTML += `
<div class="card">
   <img src="${[product.img_url]}" class="card-img-top" alt="${product.productName}">
   <div class="card-body">
       <h5 class="card-title">${product.productName}</h5>
       <h4 class="product-amount">R${product.Amount}</h4>
       <p class="card-text">${product.category}</p>
   </div>
</div> `
})
}