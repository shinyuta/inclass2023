// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
  
//   // block stack until time's up
//   setTimeout(() => {
//     while (new Date().getTime() < startTime + milliSeconds); 
//   }, 0);
// }

// pause(8000);

setTimeout(() => {
  document.getElementById('submit').style.display = 'block';
}, 8000);

// or 

// setTimeout(() => {
//   document.querySelector('form button')
//     .classList.remove('display-none')
// }, 8000);
