const drop = document.querySelector(".drops");
const navMenu = document.querySelector(".nav-menu");

drop.addEventListener("click", () => {
  drop.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n,addEventListener("click", () => {
  drops.classList.remove("active");
  navMenu.classList.remove("active");

}))