
// navBar



function navBarFunction() {
  console.log(window.scrollY);
      if (window.scrollY > 40 || document.documentElement.scrolltop > 40) {
          document.querySelector('.navbar').classList.add('bg-light') ;
          document.querySelector('.navbar').classList.remove('py-4') ;

      } else {

        document.querySelector('.navbar').classList.remove('bg-light') ;
        document.querySelector('.navbar').classList.add('py-4') ;

      }
  }

  window.onscroll = function () {navBarFunction()};

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