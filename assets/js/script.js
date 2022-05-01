// ------------------------------------ navBar

let navLinks = document.querySelectorAll('.nav-item');
let navItem = document.querySelectorAll('.nav-link');

function navBarFunction() { 
  // console.log(window.scrollY);

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
  navBarFunction(),
  navItemRecolor()
};

//--------------------------------------- Variable de position pour les ancres

const position = 
  [560, //profil
   1160, // experience
   1760, // diploma
   2270, //skills
   3470, //portfolio
   4120] //contact
;

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    window.scrollTo(0, position[i]) ;
  });
}

function resetNavItemRecolor(){

  for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].style.backgroundColor = ''; //#f7f7f7
      navItem[index].style.color = "black";
  }
}


function navItemRecolor() {

    if (window.scrollY > position[0] && window.scrollY < position[1]) {
      resetNavItemRecolor(0);
      
      navItem[0].style.color = "white";
      navLinks[0].style.backgroundColor = 'black';
    }
    else if(window.scrollY > position[1] && window.scrollY < position[2]) {
      resetNavItemRecolor(1);
      navItem[1].style.color = "white";
      navLinks[1].style.backgroundColor = 'black';
    }
    else if(window.scrollY > position[2] && window.scrollY < position[3]) {
      resetNavItemRecolor(2);
      navItem[2].style.color = "white";
      navLinks[2].style.backgroundColor = 'black';
    }
    else if(window.scrollY > position[3] && window.scrollY < position[4]) {
      resetNavItemRecolor(3);
      navItem[3].style.color = "white";
      navLinks[3].style.backgroundColor = 'black';    }
    else if(window.scrollY > position[4] && window.scrollY < position[5]) {
      resetNavItemRecolor(4);
      navItem[4].style.color = "white";
      navLinks[4].style.backgroundColor = 'black';
    }
    else if(window.scrollY > position[5]) {
      resetNavItemRecolor(5);
      navItem[5].style.color = "white";
      navLinks[5].style.backgroundColor = 'black';   } else {
        resetNavItemRecolor();
      }
}

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