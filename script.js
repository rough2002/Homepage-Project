// Function to change image src based on screen size
function changeImageSrc() {
  var image = document.getElementById("responsive-image");
  if (window.innerWidth >= 1024) {
    image.src = "assets/images/image-web-3-desktop.jpg";
    image.setAttribute("width", "850px");
    image.setAttribute("height", "450px");
    // Image for larger screens
  } else {
    image.src = "assets/images/image-web-3-mobile.jpg";
    image.setAttribute("width", "auto");
    image.setAttribute("height", "300px"); // Image for smaller screens
  }
}

// Call the function on page load and whenever the window is resized
window.onload = changeImageSrc;
window.onresize = changeImageSrc;

/////////////////
////////////
////////            MENU CLOSE & OPEN FUNTIONALITY
//
function toggleMenu() {
  document.querySelector(".overlay").classList.toggle("hide");
}
document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
document
  .querySelector(".close--menu-icon")
  .addEventListener("click", toggleMenu);
function getViewportWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

// Example usage:
const viewportWidth = getViewportWidth();
console.log("Viewport Width:", viewportWidth);
