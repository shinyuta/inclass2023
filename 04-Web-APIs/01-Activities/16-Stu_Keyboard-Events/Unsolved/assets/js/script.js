function keydownAction(event) {
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.code;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
