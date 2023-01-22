const ham = document.querySelector('.header .nav-bar .ham');
const nav = document.querySelector('.header .nav-bar nav');
ham.addEventListener('click',()=>{
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');
})
function onDark(){

    document.documentElement.setAttribute("data-theme", "dark");

}
function onLight(){
   
        document.documentElement.removeAttribute("data-theme","dark")

}