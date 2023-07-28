// window.addEventListener('DOMContentLoaded',function(){
//     document.getElementById('burger').addEventListener('click', function(){
//         document.getElementById('menu').classList.toggle('is-active');
//         console.log(document.getElementById('menu'))
//     });
  
// }) 

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})