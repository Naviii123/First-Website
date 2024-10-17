// hamburger.js
document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("hamburger-menu");
    menu.classList.toggle("show"); // Toggle the show class
    menu.classList.toggle("hidden"); // Toggle the hidden class
  });
  
  document.getElementById("close-button").addEventListener("click", function() {
    const menu = document.getElementById("hamburger-menu");
    menu.classList.remove("show"); // Remove the show class
    menu.classList.add("hidden"); // Add the hidden class
  });