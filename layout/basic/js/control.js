/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.transform = "translateX(0)";
//     // document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.transform = "translateY(-50px)";
//     // document.getElementById("header").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();
