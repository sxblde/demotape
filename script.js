const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Click-away listener
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target)) {
    menu.style.display = "none";
  }
});