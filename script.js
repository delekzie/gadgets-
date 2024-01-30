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
//  access
function nowAvail() {
   window.location.href = "index.html"
 }



function menuBtn(e){
  let list = document.querySelector('ul');

  e.name === "menu-outline" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) : ( e.name = "menu-outline",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'));
}