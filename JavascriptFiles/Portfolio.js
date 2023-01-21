let a=prompt("May I know your name")
alert("Welcome to our website "+a)
const ham = document.querySelector('.header .nav-bar .ham');
const nav = document.querySelector('.header .nav-bar nav');
ham.addEventListener('click',()=>{
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');
})