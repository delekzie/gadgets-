// iphone
function phoneProduct() {
    window.location.href = "iphone.html"
 }
 function showCarts() {
  window.location.href = "cart.html"
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
 function nowAvail() {
  window.location.href = "index.html"
}
//  samsung
function samSung() {
   window.location.href = "samSung.html"
 }

 function menuBtn (e){
  let list = document.querySelector('ul');

 
  e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}

 let allMac = [
  {
     image: "/project/Images/macbook2.jpg",
      name: "Macbook Pro 2",
      price: 612.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macpro13.jpg",
      name: "Macbook pro 13",
      price: 952.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbookAir.jpg",
      name: " Macbook Air",
      price: 222.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbookairM2.jpg",
      name: "Macbook Air M2 ",
      price: 612.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbookM3.jpg",
      name: "Macbook M3",
      price: 292.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbookpro.jpg",
      name: "Macbook Pro",
      price: 652.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbook44.jpg",
      name: "Macbook Pro 4",
      price: 482.00,
      description: "330M Processor (310M, 512M 640GB  Cache, up to 14.0 16:9HD"
  },
  {
      image: "/project/Images/macbook13.3.jpg",
      name: "Macbook Pro M2",
      price: 652.00,
      description: "360 Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbook55.jpg",
      name: "Macbook air 1",
      price: 452.00,
      description: "3 Intel Core i5-NP7508 Processor (12MB Cache, up to 4.20G"
  },
  {
      image: "/project/Images/macbook33.jpg",
      name: "Macbook 13.3",
      price: 712.00,
      description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
  },

]

allMac.map((info, index)=>{
  show.innerHTML +=`
  <div class="box2 bg-white rounded-md drop-shadow-lg">
   <div class="flex justify-center bg-gray-100 h-32"">
     <img src="${info.image}" alt="">
   </div>
      <div class="mx-2">
      <h1 class="mt-4 text-sm font-semibold">Name: ${info.name}</h1>
      <h1 class="mt-2 text-xs font-light">Price: $ ${info.price}</h1>
      <h1 class="mt-2 text-xs font-light">Description: ${info.description}</h1>
      <button  class="border border-ash px-4 py-2 text-xs rounded-md font-semibold text-white bg-DullBlue mt-7 content-center" onclick='addCart(${index})'>ADD TO CART</button>
      </div>
  </div>
  `
})

var allCart = []

function addCart(id){
  if(localStorage.cart){
    let getCart = JSON.parse(localStorage.getItem("cart"));
    let eachCart = {
      image:allMac[id].image,
      name:allMac[id].name,
      price:allMac[id].price
    }
    getCart.push(eachCart)
    console.log(getCart)
    localStorage.setItem("cart", JSON.stringify(getCart))
    cartNo.innerText=getCart.length
  }else{
    let eachCart ={
      image:allMac[id].image,
      name:allMac[id].name,
      price:allMac[id].price
    }
    allCart.push(eachCart)
    console.log(allCart)
    localStorage.setItem("cart", JSON.stringify(allCart))
  }
}
window.onload=()=>{
  let getCart = JSON.parse(localStorage.getItem("cart")) ;
  cartNo.innerText=getCart.length
}