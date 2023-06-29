// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// added artDiv
var artDiv = document.getElementsByClassName('art-title')[0]
console.log(artDiv)

// Change style by accessing style object's properties
// articlesDiv.children[0].children[1].style.fontSize = '50px';

// changed from long form to short form w/ artDiv variable that 
// accesses h3 from art-title class directly

artDiv.style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

