var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  console.log(event.target)
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");
    // console.log(state)

    if (state === 'hidden') {
      element.setAttribute('data-state', 'visible')
      // visible and textcontent as the number
      element.textContent = element.getAttribute('data-number')
    }
    else {
      element.setAttribute('data-state', 'hidden')
      // hidden and textcontent empty
      element.textContent = ''
    }
  } 
});
