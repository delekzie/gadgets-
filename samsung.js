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
//  samsung
function samSung() {
   window.location.href = "samSung.html"
 }
 function menuBtn (e){
    let list = document.querySelector('ul');

    
    e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}
let allSamsung = [
    {
        image: '/project/Images/samsungG.jpg',
        name:"Samsung Galaxy note4",
        price: 1345.00,
        color: "White & Black",
        
    },
    {
        image: '/project/Images/samsungM11.jpg',
        name:"Samsung Galaxy M11",
        price: 145.00,
        color: "All colors",
      
    },
    {
        image: '/project/Images/samsungS9.jpg',
        name:"Samsung Galaxy Tab S9",
        price: 445.00,
        color: "Black",
        
    },
    {
        image: '/project/Images/samsungA14.jpg',
        name:"Samsung Galaxy A14 ",
        price: 645.00,
        color: "All colors",
        
    },
    {
        image: '/project/Images/samsungs20.jpg',
        name:"Samsung Galaxy s20",
        price: 1345.00,
        color: "white, black, Wine",
       
    },
    {
        image: '/project/Images/samsung1.jpg',
        name:"Samsung Galaxy s19",
        price: 545.00,
        color: "All colors",
       
    },
    {
        image: '/project/Images/samsung3.png',
        name:"Samsung Galaxy A5",
        price: 445.00,
        color: "All colors",
        
    },
    {
        image: '/project/Images/samsungT.jpg',
        name:"Samsung Galaxy A6",
        price: 345.00,
        color: "All colors",
        
    },
    {
        image: '/project/Images/samsungz10.jpg',
        name:"Samsung Galaxy Z10",
        price: 995.00,
        color: "All colors",
     
    },
    {
        image: '/project/Images/samsunGZ.jpg',
        name:"Samsung Galaxy Flip",
        price: 655.00,
        color: "Purple,White, Black",
       
    },
    {
        image: '/project/Images/samsungty.jpg',
        name:"Samsung Galaxy Tab2",
        price: 345.00,
        color: "White & Black",
       
    },
    {
        image: '/project/Images/sam2.jpg',
        name:"Samsung Galaxy A15+",
        price: 2250.00,
        color: "All colors",
       
    },
    {
        image: '/project/Images/s22.png',
        name:"Samsung Galaxy S22",
        price: 1345.00,
        color: "All colors",
        
    },
    {
        image: '/project/Images/SamsungA9.jpg',
        name:"Samsung Galaxy A9+",
        price: 2045.00,
        color: "White & Black",
       
    },
    {
        image: '/project/Images/SamsungFold.jpg',
        name:"Samsung Galaxy Fold",
        price: 1845.00,
        color: "All Colors"
       
    },
 
]
allSamsung.map((info, key)=>{
    disp.innerHTML +=`
    <div class="box2 bg-white rounded-md drop-shadow-lg">
     <div class="flex justify-center bg-gray-100 h-32"">
       <img src="${info.image}" alt="">
     </div>
        <div class="mx-2">
        <h1 class="mt-4 text-sm font-semibold">Name: ${info.name}</h1>
        <h1 class="mt-2 text-xs font-light">Price: $ ${info.price}</h1>
        <h1 class="mt-2 text-xs font-light">Color: ${info.color}</h1>
        <button  class="border border-ash px-4 py-2 text-xs rounded-md font-semibold text-white bg-DullBlue mt-8 content-center" onclick='addCart(${key})'>ADD TO CART</button>
        </div>
    </div>
    `
})

var allCart = []

function addCart(id){
  if(localStorage.cart){
    let getCart = JSON.parse(localStorage.getItem("cart"));
    let eachCart = {
      image:allSamsung[id].image,
      name:allSamsung[id].name,
      price:allSamsung[id].price
    }
    getCart.push(eachCart)
    console.log(getCart)
    localStorage.setItem("cart", JSON.stringify(getCart))
    cartNo.innerText=getCart.length
  }else{
    let eachCart ={
      image:allSamsung[id].image,
      name:allSamsung[id].name,
      price:allSamsung[id].price
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