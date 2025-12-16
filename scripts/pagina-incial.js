const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector("nav");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
})