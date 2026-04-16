////////////////////////// Function Without Parameter & Without Return //////////////////////////////////////////////////////
//Create a function that prints 5 + 5.
function add(){
    console.log(5+5)
}
add()

//Create a function that prints 20 - 10.
function subtract(){
    console.log(20-10)
}
subtract()

//Create a function that prints 6 * 7.
function multiply (){
    console.log(6*7)
}
multiply()

//Create a function that prints 100 / 5.
function divide(){
    console.log (100/5)
}
divide()

//Create a function that prints "Hello JavaScript".
function printit() {
    console.log("Hello Script")
}
printit()

////////////////////////// function with parameter and without return type //////////////////////////////////////////////////////

//Create a function that adds two numbers.
function add(x,y){
console.log(x+y)
}
add(2,3)

//Create a function that subtracts two numbers.
function subtract(x,y){
    console.log(x-y)
}
subtract(9,3)
//Create a function that multiplies two numbers.

function multiply(x,y){
    console.log(x*y)
}
multiply(3,4)

//Create a function that divides two numbers.
function divide(x,y){
    console.log(x/y)
}
divide(12,4)

//Create a function that prints the square of a number.
function square (x) {
    console.log(x*x)
}
square(9)

///////////////////////// function with parameter and with return type //////////////////////////////////////////////////////
//Create a function that returns sum of two numbers.
function add(x,y){
   return (x+y)
}
let z= add(8,9)
console.log(z)

//Create a function that returns multiplication of two numbers.
function multiply(x,y){
    return x*y
}

 z= multiply(6,7)
console.log (z)

//Create a function that returns square of a number.
function sq (x){
    return x*x
}
z= sq(7)


//Create a function that returns cube of a number.

function cube(x){
    return x*x*x
}
z= cube(6)
console.log(z)

//Create a function that returns average of 3 numbers.

function average (x,y,w){
    return ((x+y+w)/3)
}
z= average(1,2,3)
console.log(z)



///////////////////////////////////////////////////// Data Types & typeof //////////////////////////////////////////////////////////////////////////////

//Create a variable with value 10 and print its type.
let x=10
console.log(x)
console.log(typeof x)   

//Create a variable with value "JavaScript" and print type.
 let y= "JavaScript"
console.log (y)
console.log(typeof y)


//Create a variable with value true and print type.
let w= true
console.log(w)
console.log(typeof w)

//Create a variable with value false and print type.
let v = false
console.log(v)
console.log(typeof v)


//Create a variable with value -50.
let u = -50
console.log(u)
console.log(typeof u)




///////////////////////////////////////////////////// COMPRISON OPerator //////////////////////////////////////////////////////////////////////////////
//comparison opertator 
// // same value but type different 
// console.log(typeof 10) // console.log(typeof '10') 
// entity --- entity -----> max output boolean/ returns boolean ---> trur or false 
// < , > , <= , >= 
// == , != ----> value 
// === ,!== ----> value and type


//Check 10 == '10'.
console.log(10 == '10') // output  > true

//Check 10 === '10'.
console.log (10 === '10') // output  > false

//Check 10 !== '10'.
console.log(10 !== '10')

//Check 20 > 10.
console.log(20 > 10)

//Check 5 < 2.
console.log(5 < 2)

//Check 10 >= 10.
console.log(10 >= 10)

//Check 10 <= 5.
console.log(10 <= 5)

//Check 15 != 10.
console.log(15 != 10)

//Check 20 === 20.
console.log (20 === 20)

//Check '5' == 5.
console.log ('5' == 5)

console.log (5 > '5')  // o/p >> false



///////////////////////////////////////////////////// LOGICAL OPerator //////////////////////////////////////////////////////////////////////////////
// and - && 
// // true && true ---> true 
// // false && true ---> false 
// // true && false ---> false 
// // false && false ---> false

// or - || 
// // true || true ---> true 
// // false || true ---> true 
// // true || false ---> true 
// // false || false ---> false

// not - ! 
// // !false ---> true 
// // !true ---> false 



console.log(2 == 2 && 3 === 3) 
console.log(2 === '2' && 3 === 3) 
console.log(2 === 2 && 3 === '3') 
console.log(2 !== 2 && 3 === '3')

console.log(2 == 2 || 3 == 3) 
console.log(2 != 2 || 3 == 3) 
console.log(2 == 2 || 3 != 3) 
console.log(2 != 2 || 3 != 3)


console.log(!(2 == 2)) 
console.log(!(2 != 2))

//Check (5 == 5 && 10 == 10).

//Check (5 == 5 && 10 == 5).

//Check (5 == 10 && 10 == 10).

//Check (5 == 5 || 10 == 5).

//Check (5 == 10 || 10 == 10).