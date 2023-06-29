var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

var h4elements = document.querySelectorAll('h4');
console.log(h4elements)
// selects all h4 elements

for (var i = 0; i < h4elements.length; i++) {
    h4elements[i].setAttribute('style', 'color: blue; font-size: 30px; font-weight: bold; ');
   }
// iterates through all h4 elements and applied attributes to each one

document.body.children[0].setAttribute('style', 'padding-left: 10px; margin: 0px; ')
// document.querySelector('h1').setAttribute('style', 'padding-left: 10px; margin: 0px; ')
// document.querySelectorAll('h1')[0].setAttribute('style', 'padding-left: 10px; margin: 0px; ')

// body.children[0] is the title, changed attributes of the title.
// + different ways to finding same thing using querySelector and qsAll

