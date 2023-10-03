// 1) Where is carNoise stored?
// in global context
const carNoise = 'Honk';
// 2) Where is goFast stored?
//  in global context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Speed is assigned when calling the function, argument, 
  // stored the function context.
  
  // 5) Where is makeNoise stored?
  // in function context of goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // calls global variable caarnoise using the function makeNoise for sound
  // and goFast(speed) for speed.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// webAPI alert window with confirm, then runs 
// will console log 'My speed is at 80, time to Honk'
if(confirm("Do you want to go fast?")) {
  goFast(80);
}

