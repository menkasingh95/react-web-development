// Data declaration of let, const, var
// (var) ---> global    
// (let) and (const) ---> block
var x = 1;
let y = 1;
if(true){
    var x = 2;
    let y = 2;
}
console.log(x);  // output will be 2
console.log(y); // output will be 1

{
    let z = 'hello'
    console.log(z)
}
// console.log(z)  // ReferenceError: z is not defined

var m = 20;  // We can reinitialize the value of var
var m = 30;
{
    console.log(m)  // output will be 30
}

// let k = 5;
// let k = 10;   // We can not reinitialize the value of let 

const num = 45;
{
    // num = 48;  // Reassignment of constant variable (num) is not allowed.
}
console.log(num);

const age = 34;
// age = 40;  // can not Reassignthe value
console.log(age);

if(true){
    var num1 = 10;
    console.log("Inside if var " + num1);
}
  console.log("Outside if var " + num1);



