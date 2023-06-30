// TODO: Which element is the following line of code selecting?
// div class carouselbox.
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// the button with the class of 'next'
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// when you the carousel img the window location navigates to the img.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// when you click the next button the image goes to the next image.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // because next is a child element of carousel, this prevents
  // the click event to also lead to the click event of carousel
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// when you click the prev button the image goes to the previous image.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // if we didn't add this line of code, clicking previous would also cause
    // carousel's event listener to activate.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
