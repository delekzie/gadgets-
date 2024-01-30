// iphone
function phoneProduct() {
    window.location.href = "iphone.html"
 }
 function showCarts() {
  window.location.href = "cart.html"
}
function nowAvail() {
  window.location.href = "index.html"
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
 function menuBtn (e){
  let list = document.querySelector('ul');

 
  e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}
 let allIpad = [
  {
     image: "/project/Images/appleipad.jpg",
      name: "Apple Ipad",
      price: 712.00,
      gb: "298gb"
  },
  {
      image: "/project/Images/applepad.jpg",
      name: "Apple Ipad pro",
      price: 922.00,
      gb: "514gb"
  },
  {
      image: "/project/Images/hp11.jpg",
      name: "HP Tablet 11",
      price: 292.00,
      gb: "46gb"
  },
  {
      image: "/project/Images/prime1.jpg",
      name: "Itel Prime 1",
      price: 212.00,
      gb: "64gb"
  },
  {
      image: "/project/Images/itel2.jpg",
      name: "Itel Pad 3",
      price: 202.00,
      gb: "246gb"
  },
  {
      image: "/project/Images/tabs8.jpg",
      name: "Samsung Tab S8",
      price: 192.00,
      gb: "256gb"
  },
  {
      image: "/project/Images/tabs7.jpg",
      name: "samsung Tab S7",
      price: 282.00,
      gb: "216gb"
  },
  {
      image: "/project/Images/infinx1.jpg",
      name: "Infinix Note Pad",
      price: 652.00,
      gb: "256gb"
  },
  {
      image: "/project/Images/tecno8.jpg",
      name: "Tecno Driodpad 8",
      price: 452.00,
      gb: "162gb"
  },
  {
      image: "/project/Images/phantom.jpg",
      name: "Tecno Phantom Fold",
      price: 412.00,
      gb: "512gb"
  }
 
]

allIpad.map((info, index)=>{
  show.innerHTML +=`
  <div class="box2 bg-white rounded-md drop-shadow-lg">
   <div class="flex justify-center bg-gray-100 h-32"">
     <img src="${info.image}" alt="">
   </div>
      <div class="mx-2">
      <h1 class="mt-4 text-sm font-semibold">Name: ${info.name}</h1>
      <h1 class="mt-2 text-xs font-light">Price: $ ${info.price}</h1>
      <h1 class="mt-2 text-xs font-light">GB: ${info.gb}</h1>
      <button  class="border border-ash px-4 py-2 text-xs rounded-md font-semibold text-white bg-DullBlue mt-7 content-center" onclick='addCart(${index})'>ADD TO CART</button>
      </div>
  </div>
  `
})
var allCart = []    
function addCart(id){
  if(localStorage.cart){
    let getCart = JSON.parse(localStorage.getItem("cart")) ;
    let eachCart={
      image:allIpad[id].image,
      name:allIpad[id].name,
      price:allIpad[id].price,
  }
  getCart.push(eachCart)
  console.log(getCart)
    localStorage.setItem("cart", JSON.stringify(getCart))
    cartNo.innerText=getCart.length
  }
  else{
    let eachCart={
      image:allIpad[id].image,
      name:allIpad[id].name,
      price:allIpad[id].price,
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