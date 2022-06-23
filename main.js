var toggle = document.querySelector("#btn");
var nav = document.querySelector("#prime-nav");
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
})