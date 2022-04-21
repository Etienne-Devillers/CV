window.onscroll = function () {navBarFunction()};

function navBarFunction() {
  console.log(window.scrollY)
      if (window.scrollY > 40 || document.documentElement.scrolltop > 40) {
          document.getElementById("navBar").style.padding = "1.5rem 1.5rem";
          document.getElementById("navBar").style.opacity = "1";
          document.getElementById("navName").style.fontSize ="1em";
          document.getElementById("navBar").style.backgroundColor = "#FFF";
      } else {
          document.getElementById("navBar").style.padding = "2.2rem 1.5rem";
          document.getElementById("navBar").style.opacity = "0.5";
          document.getElementById("navName").style.fontSize ="2.8em";
          document.getElementById("navBar").style.backgroundColor = "";
      }
  }

// Section nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// retire la classe active du burger et du menu mobile
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}









var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}