// TODO: What does 'this' refer to?
console.log(this);
//refers to the global object, in this case the browser's global
// object is window

test = 500; 

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }
//refers to the global object in this case the function, also window (if it was a dot method for example
//this.test, it would output 500)

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};
// this will log 20 (10 + 10)

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};
// this will log 5750 (5000 *1.15)

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
