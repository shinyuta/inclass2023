var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button

function click() {
  incrementEl.addEventListener("click", function() {
    if (count >= 0) {
      countEl.textContent = count++;
      setCounterText();
      // call function to update function
      // (used to not have this, and it was lagging behind by one on screen)
    }
  });
  
  // TODO: Add event listener to decrement button
  
  decrementEl.addEventListener("click", function() {
    if (count >= 1) {
      countEl.textContent = count--;
      setCounterText();
    }
  });
}

click()