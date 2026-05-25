const hamburger = document.getElementById("hamburger");
const mobile_sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");
const content = document.getElementById("content");

hamburger.addEventListener("click", () => {
  mobile_sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("active");
  body.classList.toggle("scrolling");
  content.classList.toggle("inactive");
  console.log("Mobile menu toggled");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
  body.classList.toggle("scrolling");
  content.classList.toggle("inactive");
  console.log("Tablet menu closed")
});