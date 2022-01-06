window.onscroll = function () {navBarFunction()};

function navBarFunction() {
console.log(window.scrollY)
    if (window.scrollY > 80 || document.documentElement.scrolltop > 80) {
        document.getElementById("navBar").style.padding = "0px 0px";
        document.getElementById("navBar").style.opacity = "1";
    } else {
        document.getElementById("navBar").style.padding = "30px 0px";
        document.getElementById("navBar").style.opacity = "0.5";
    }
}