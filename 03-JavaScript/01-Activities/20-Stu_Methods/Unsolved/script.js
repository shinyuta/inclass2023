var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
console.log(constellations);
// adds element to the beginning of an array.
// push adds element to the end of an array.

planets.splice(5,1);
console.log(planets);
// removes the 5th element in the array
// in this case could've use planets.pop() because that
// would remove the last element in the array.

var galaxy = constellations.concat(planets);
console.log(galaxy)
// combines two arrays

var newstar = star.replace("polaris", "POLARIS");
// could've use star.toUpperCase()
console.log(newstar);

