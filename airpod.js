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
function showCarts() {
  window.location.href = "cart.html"
}
//  samsung
function samSung() {
  window.location.href = "samSung.html"
}
function menuBtn (e){
   let list = document.querySelector('ul');

  
   e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}

  let allAirpod = [
      {
         image:'/project/Images/ap2.jpg',
         name: "Airpod Pro 3",
         price: 45.67,
         brand: "Apple"
         
      },
      {
         image: "/project/Images/airpod2.png",
         name: "Airpod Pro 2",
         price: 67.70,
         brand: "Apple"
      },
      {
         image: "/project/Images/6airpod.jpg",
         name: "Airpod Max 1",
         price: 60.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/airpod1.png",
         name: "Airpod Pro",
         price: 140.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/airpodPro3.jpg",
         name: "Airpod Pro Max",
         price: 158.99,
         brand: "Apple"
      },
      {
         image:'/project/Images/earphone6.jpg',
         name: "Earphone Wireless",
         price: 125.67,
         brand: "SoundStar"
         
      },
      {
         image: "/project/Images/earphone5.jpg",
         name: "Earphone Max",
         price: 132.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/earphonee.png",
         name: "Apple Earphone",
         price: 140.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/earphone4.jpg",
         name: "Earphone Max",
         price: 180.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/earphone3.jpg",
         name: "Earphone Max",
         price: 178.99,
         brand: "Apple"
      },
      {
         image:'/project/Images/watchultra.jpg',
         name: "iWatch Ultra",
         price: 94.67,
         brand: "Apple"
         
      },
      {
         image: "/project/Images/series6.jpg",
         name: "iWatch Series 6",
         price: 160.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/series8.jpg",
         name: "iWatch Series 8",
         price: 54.99,
         brand: "Apple"
      },
      {
         image: "/project/Images/watch1.jpg",
         name: "Apple Watch",
         price: 200.00,
         brand: "Apple"
      },
      {
         image: "/project/Images/series2.jpg",
         name: "Apple Watch",
         price: 199.99,
         brand: "Apple"
      },
  ]
  allAirpod.map((info, index)=>{
   display.innerHTML +=`
   <div class="box2 bg-white rounded-md drop-shadow-lg">
    <div class="flex justify-center bg-gray-100 h-32"">
      <img src="${info.image}" alt="">
    </div>
       <div class="mx-2">
       <h1 class="mt-4 text-sm font-semibold">Name: ${info.name}</h1>
       <h1 class="mt-2 text-xs font-light">Price: $ ${info.price}</h1>
       <h1 class="mt-2 text-xs font-light">Brand: ${info.brand}</h1>
       <button  class="border border-ash px-4 py-2 text-xs rounded-md font-semibold text-white bg-DullBlue mt-8 content-center" onclick='addCart(${index})'>ADD TO CART</button>
       </div>
   </div>
   `
  })

  var allCart = []

  function addCart(id){
   if(localStorage.cart){
      let getCart = JSON.parse(localStorage.getItem("cart")) ;
      let eachCart={
         image:allAirpod[id].image,
         name:allAirpod[id].name,
         price:allAirpod[id].price
        
      }
      getCart.push(eachCart)
      console.log(getCart)
      localStorage.setItem("cart", JSON.stringify(getCart))
      cartNo.innerText=getCart.length
   }else{
         let eachCart={
            image:allAirpod[id].image,
            name:allAirpod[id].name,
            price:allAirpod[id].price
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