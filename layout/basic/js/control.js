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






// $("#opt_layer_window:visible").each(function() {
//     // var sSelectOptionId = $(this).attr('id');
//     // var sParentVal = $(this).val();
//     // $("#productOptionIframe")[0].contentWindow.$('#product_detail_option_layer #'+sSelectOptionId+'').val(sParentVal).trigger('change');
//
//     // $("#opt_layer_iframe_parent").css({"top": 0, "left": 0, "background-color": red});
//     console.log("ddddddddddddddddddd");
// });
