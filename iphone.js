
function nowAvail() {
    window.location.href = "index.html"
  }
  function showCarts() {
    window.location.href = "cart.html"
  }
// iphone
function phoneProduct() {
    window.location.href = "iphone.html"
 }
// airpod
 function appleProduct() {
   window.location.href = "airpod.html"
 }
//  ipad
 function ipadProduct() {
   window.location.href = "ipad.html"
 }
//  mac
 function macBook() {
   window.location.href = "macbook.html"
 }
//  laptop
function lapTops() {
   window.location.href = "laptop.html"
 }
//  samsung
function samSung() {
   window.location.href = "samSung.html"
 }
// function shoppingCarts() {
//    window.location.href = "cart.html"
//  }

function menuBtn (e){
    let list = document.querySelector('ul');

    
    e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}
let allProducts = [
    {
        image: '/project/Images/iphone13PM.png',
        name:"Iphone 13 pro Max",
        price: 1445.00,
        color: "ForestGreen",
        gb: "125gb, 256gb, 512gb"
    },
    {
        image: '/project/Images/IPHONE11pm.png',
        name:"Iphone 11 pro",
        price: 1145.00,
        color: "Champagne Gold",
        gb: "64gb, 125gb, 256gb"
    },
    {
        image: '/project/Images/iphone14.png',
        name:"Iphone 14 pro Max",
        price: 2545.00,
        color: "Light Blue",
        gb: "125gb, 256gb, 512gb"
    },
    {
        image: '/project/Images/iphone12pm.png',
        name:"Iphone 12 pro Max",
        price: 2545.00,
        color: "Parcific blue",
        gb: "64gb, 125gb, 256gb"
    },
    {
        image: '/project/Images/iphone15.png ',
        name:"Iphone 15 pro",
        price: 3305.00,
        color: "Red",
        gb: "125gb, 256gb, 512gb"
    },
    {
        image: '/project/Images/iphonexr.jpg ',
        name:"Iphone Xr ",
        price: 305.00,
        color: "Red",
        gb: "125gb, 256gb, 64gb"
    },  
      {
        image: '/project/Images/iphonemax.jpg ',
        name:"Iphone Xsmax",
        price: 785.00,
        color: "Champagne Gold",
        gb: "125gb, 256gb, 64gb"
    },
    {
        image: '/project/Images/iphonex.jpg ',
        name:"Iphone X",
        price: 3305.00,
        color: "Black",
        gb: "125gb, 256gb, 64gb"
    },
    {
        image: '/project/Images/iphone8.jpg ',
        name:"Iphone 8",
        price: 205.00,
        color: "Black",
        gb: "125gb, 256gb, 65gb"
    },    {
        image: '/project/Images/7plus.jpg ',
        name:"Iphone 7 Plus",
        price: 225.00,
        color: "Black",
        gb: "332gb, 125gb, 64gb"
    },
    {
        image: '/project/Images/IPHONESE.Jpg ',
        name:"Iphone SE",
        price: 129.99,
        color: "red, white",
        gb: "32gb, 64gb, 126gb"
    },
    {
        image: '/project/Images/iphone6s.jpg',
        name:"Iphone 6s",
        price: 1445.00,
        color: "ForestGreen",
        gb: "32gb, 64gb, 128gb"
    },
    {
        image: '/project/Images/iphone11.jpg',
        name:"Iphone 11",
        price: 745.00,
        color: "Purple",
        gb: "64gb, 125gb, 256gb"
    },
    {
        image: '/project/Images/13mini.jpg',
        name:"Iphone 13 Mini",
        price: 2000.00,
        color: "Deep Blue",
        gb: "125gb, 256gb, 512gb"
    },
    {
        image: '/project/Images/14plus.jpg',
        name:"Iphone 14 Plus",
        price: 2545.00,
        color: "Purple",
        gb: "215gb, 512gb, 1t"
    },
]

allProducts.map((info, key)=> {
    show.innerHTML +=`
    <div class="box2 bg-white rounded-md drop-shadow-lg">
     <div class="flex justify-center bg-gray-100 h-32"">
       <img id="productImage" src="${info.image}" alt="">
     </div>
        <div class="mx-2">
        <h1 class="mt-4 text-sm font-semibold" id="productTitle">Name: ${info.name}</h1>
        <h1 class="mt-2 text-xs font-light" id="productPrice">Price: $ ${info.price}</h1>
        <h1 class="mt-2 text-xs font-light">Color: ${info.color}</h1>
        <h1 class="mt-2 text-xs font-light">Gb: ${info.gb}</h1>
        <button  class="border border-ash px-4 py-2 text-xs rounded-md font-semibold text-white bg-DullBlue mt-8 content-center" onclick='addCart(${key})'>ADD TO CART</button>
        </div>
    </div>
    `
})

var allCart = []
function addCart(id){
    if(localStorage.cart){
      let getCart = JSON.parse(localStorage.getItem("cart")) ;
      let eachCart={
        image:allProducts[id].image,
        name:allProducts[id].name,
        price:allProducts[id].price
    }
    getCart.push(eachCart)
    console.log(getCart)
    localStorage.setItem("cart", JSON.stringify(getCart))
    cartNo.innerText=getCart.length
    }
    else{
      let eachCart={
        image:allProducts[id].image,
        name:allProducts[id].name,
        price:allProducts[id].price
    }
      allCart.push(eachCart)
      console.log(allCart);
      localStorage.setItem("cart", JSON.stringify(allCart))
    }
  }
window.onload=()=>{
    let getCart = JSON.parse(localStorage.getItem("cart")) ;
    cartNo.innerText=getCart.length
}