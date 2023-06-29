var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
li1.textContent = "apples"
favoriteEl.appendChild(li1)

li2.textContent = "pizza"
favoriteEl.appendChild(li2)

li3.textContent = "dumplings"
favoriteEl.appendChild(li3)

li4.textContent = "cupcakes"
favoriteEl.appendChild(li4)

var lists = document.querySelectorAll('li');
var colors = ["#666666", "#777777", "#888888", "#999999"]

for (var i = 0; i < lists.length; i++) {
    // changes static changes and also itterates through colors for the different colors
    lists[i].setAttribute('style', 'color: white; padding: 5px; margin-left: 35px; background:' +colors[i]);
   }

// listE1.setAttribute('style',
// still need to change background set attribute for ol
