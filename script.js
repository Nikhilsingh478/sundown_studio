// const scroll = new LocomotiveScroll({
//   el: document.querySelector('main'),
//   smooth: true
// });

var elems = document.querySelectorAll(".elem");
var bgImageContainer = document.getElementById("fixed-image");
elems.forEach((e) => {
  let img = e.getAttribute("data-image");
  e.addEventListener("mouseenter", function(){ 
    bgImageContainer.style.backgroundImage = `url(${img})`;
    bgImageContainer.style.display = "block";
  });
  e.addEventListener("mouseleave", function(){ 
    bgImageContainer.style.display = "none";
  });
});



// Cache DOM elements once at the top
const headings = document.querySelectorAll(".heading");
const rightDiv = document.getElementById("rightdiv");
const para = document.querySelector("#text-container p");
const firstHeading = document.querySelector("#firstheading");

// Set initial state
rightDiv.style.backgroundImage = `url("https://images.unsplash.com/photo-1759520582331-8b62a819a452?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
firstHeading.style.color = "white";

// Utility function to reset all heading colors
function resetHeadingColors() {
  headings.forEach(h => (h.style.color = "gray"));
}

// Handle heading click
function handleHeadingClick(event) {
  const heading = event.currentTarget;
  const src = heading.dataset.image;
  const text = heading.dataset.para;

  // Reset colors and update UI
  resetHeadingColors();
  heading.style.color = "white";
  para.textContent = text;
  rightDiv.style.backgroundImage = `url("${src}")`;
}

// Attach event listeners
headings.forEach(heading => {
  heading.addEventListener("click", handleHeadingClick);
});




var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });

    