// Normal Functions
console.log('========================================== Normal Function =======================================');
var results = function sum1(a, b) {  // function expression
    let add = a + b;
    console.log(add);
};

function sum2(a, b) {   // function declaration
    let add = a + b;
    console.log(add);
}

results(10, 20);
sum2(20, 30);


// Arrow Functions
console.log('========================================== Arrow Function ========================================');

const sum3 = (a, b) => {
    let add = a + b;
    console.log(add);
}
sum3(40, 50);

// How to change this function expression to an arrow function?
const mod = function(num1, num2) {  // function expression
	return num1 % num2;
}
console.log(mod(3, 2));

const mod2 = (num1, num2) => num1 % num2; // Arrow function
console.log(mod2(7, 5));


console.log('=================================== functions inside another functions ===========================');
function outer() {
    const a = 10;
    const b = 15;
    const result = inner();
    function inner() {
      return a + b;
    }
   return result;
}
 console.log(outer());