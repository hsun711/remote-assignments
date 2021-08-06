let headBlock = document.querySelector(".welcomemsg");
let headMsg = document.querySelector(".headMsg")
    
headBlock.addEventListener("click", function(e){
    headMsg.innerHTML = "Have a good Day!";
})

let btn = document.querySelector(".btn");
let more = document.querySelector('.more');
btn.addEventListener("click", (e)=>{
    more.style.display = "flex";
})

let menu = document.querySelector('#menu');
let burgerIcon = document.querySelector('.burger');
let close = document.querySelector('.close');

burgerIcon.addEventListener("click", ()=>{
    menu.classList.toggle('open');
})

close.addEventListener("click", ()=>{
    menu.classList.toggle('open');
})