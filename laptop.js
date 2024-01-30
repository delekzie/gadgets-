// iphone
function phoneProduct() {
    window.location.href = "iphone.html"
 }
// airpod
 function appleProduct() {
   window.location.href = "airpod.html"
 }
 function showCarts() {
    window.location.href = "cart.html"
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

let allLaptops = [
    {
       image: "/project/Images/dell1.jpg",
        name: "Dell",
        price: 312.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/lenovo1.jpg",
        name: "Lenovo",
        price: 252.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/pavilion.jpg",
        name: "HP Pavilion",
        price: 222.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/acer1.jpg",
        name: "Acer",
        price: 212.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/corei7.jpg",
        name: "Hp Core i7",
        price: 202.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/corei5.jpg",
        name: "Hp Core i5",
        price: 192.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/corei3.jpg",
        name: "Hp Core i3",
        price: 282.00,
        description: "330M Processor (310M, 512M 640GB  Cache, up to 14.0 16:9HD"
    },
    {
        image: "/project/Images/sbookpro.jpg",
        name: "Galaxy Book2",
        price: 652.00,
        description: "360 Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/spro.jpg",
        name: "Galaxy Book Pro",
        price: 452.00,
        description: "3 Intel Core i5-NP7508 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/books.jpg",
        name: "Samsung Book S",
        price: 112.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/aspire5.jpg",
        name: "Acer Aspire 5",
        price: 145.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/xps15.jpg",
        name: "Dell xps 15",
        price: 106.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/hppro450.jpg",
        name: "Hp Probook 450",
        price: 222.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/xps13.jpg",
        name: "Dell xps 13",
        price: 112.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    },
    {
        image: "/project/Images/lv300.jpg",
        name: "Lenovo V330",
        price: 232.00,
        description: "Intel Core i5-1135G7 Processor (12MB Cache, up to 4.20G"
    }
]

allLaptops.map((info, index)=>{
    laptop.innerHTML +=`
    <div class="box2 bg-white rounded-md drop-shadow-lg">
     <div class="flex justify-center bg-gray-100 h-32"">
       <img src="${info.image}" alt="">
     </div>
        <div class="mx-2">
        <h1 class="mt-4 text-sm font-semibold">Name: ${info.name}</h1>
        <h1 class="mt-2 text-xs font-light">Price:$ ${info.price}</h1>
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
            image:allLaptops[id].image,
            name:allLaptops[id].name,
            price:allLaptops[id].price
        }
        getCart.push(eachCart)
        console.log(getCart);
        localStorage.setItem("cart", JSON.stringify(getCart))
        cartNo.innerText=getCart.length
    }else{
        let eachCart = {
            image:allLaptops[id].image,
            name:allLaptops[id].name,
            price:allLaptops[id].price
        }
        allCart.push(eachCart)
        console.log(allCart)
        localStorage.setItem("cart",  JSON.stringify(allCart))
    }
}
window.onload=()=>{
    let getCart = JSON.parse(localStorage.getItem("cart")) ;
    cartNo.innerText=getCart.length
}