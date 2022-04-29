// ------------------------------------ navBar

let navLinks = document.querySelectorAll('.nav-item');

function navBarFunction() {
  console.log(window.scrollY);
  console.log(document.documentElement.scrolltop);
  if (window.scrollY > 40 || document.documentElement.scrolltop > 40) {
    document.querySelector('.navbar').classList.add('bg-light');
    document.querySelector('.scrollingMouse').style.opacity = 0;
    navLinks.forEach(element => {
      element.style.padding = '0.3rem 15px';
    });

  } else {

    document.querySelector('.navbar').classList.remove('bg-light');
    document.querySelector('.scrollingMouse').style.opacity = 1;
    navLinks.forEach(element => {
      element.style.padding = '1.5rem 15px';
    });;

  }
}
navBarFunction();
window.onscroll = function () {
  navBarFunction()
};

//--------------------------------------- Variable de position pour les ancres

const position = 
  [600, //profil
   1260, // experience
   1760, // diploma
   2340, //skills
   3570, //portfolio
   4120] //contact
;

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    window.scrollTo(0, position[i]) 
  });
}

function resetNavItemRecolor(){
  navLinks.forEach(element => {
    element.style.color = 'black ';
    element.style.backgroundColor = '#f7f7f7';
  });
}


resetNavItemRecolor()
// function navItemRecolor() {

//   if (window.scrollY < position.profil) {
//     console.log('top');
//   }
//   else if(window.scrollY > position.experience) {
//     console.log('profil');
//   }
//   else if(window.scrollY > position.diploma) {
//     console.log('experiences');
//   }
//   else if(window.scrollY > position.skills) {
//     console.log('formations');
//   }
//   else if(window.scrollY > position.portfolio) {
//     console.log('competences');
//   }
//   else if(window.scrollY > position.contact) {
//     console.log('portfolio');
//   }
// }
//Changement de couleur du bg des liens.







// collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
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
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}