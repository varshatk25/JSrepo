////////////////////////////////// PRINT //////////////////////////////////////////////
console.log("Hello"); //o/p > Hello
console.log(`My World`) //o/p > My World
console.log('Chimu') //o/p > Chimu
console.log()  //o/p > space
console.log(123456)  //o/p > 123456
//console.log(~) -- throw error
console.log(3);  //o/p > 3
console.log('@');  //o/p > @
console.log(`~`);   //o/p >  ~
console.log('') //o/p > space
console.log('`~!@#$%^&*_+-=|:"<>?,./;')   //o/p >  `~!@#$%^&*_+-=|:"<>?,./;
console.log([{}]) //brackets need not to be in quotes   //o/p >  [{}]

//console.log('\') -- will give error as \ is an escape character
console.log ('\\')  // this will print \

console.log() //o/p > space




/////////////////////////////////// VARIABLE //////////////////////////////////////////////
let a=5
console.log(a)  //o/p > 5

let b= 20
console.log(b)   //o/p > 20

let name1= 'varsha'
console.log(name1)   //o/p > varsha

let name = 'Thombre'
console.log(name)   //o/p > Thombre

let city = 'Mumbai'
console.log(city)      //o/p > Mumbai

let age = 34
console.log(age)        //o/p > 34
console.log('age')    //o/p > age

let m =5          // declaring the variable for the first time
console.log(m)     //o/p > 5

m=7                  // reassigning value
console.log(m)      //o/p > 7

//let m=9             // redeclaring the variable
//console.log(m)      //o/p > error 'm' has alraedy declared

const price = 100
console.log(price)       //o/p > 100

//price = 200
//console.log(price)      //o/p > error can not reassign the value to a const variable

const country = 'India'
console.log(country)

let x=9 ,  y= 10
console.log(x)
console.log(y)

let v=1; d=5, s=9  // we can declare the variables allthogether
console.log(v)
console.log(d)
console.log(s)

r=89
console.log(r)
r=90
console.log(r) // default let type ka hoga variable

let score=50
console.log(score)
score =80
console.log(score)





//////////////////////// Arethmetic operation ////////////////////////////////////////
z= 10+5
console.log(z)

console.log(10+5)
console.log(20-6)
console.log(4*8)
console.log(40/5)
console.log(15%4)

let k= 12, l=3 
console.log(k+l)
console.log(k-l)
console.log(k*l)
console.log(k/l)
console.log(k%l)

let o=9, p=2
console.log(o+p)
console.log(o-p)
console.log(o*p)
console.log(o/p)
console.log(o%p)

let c=50
let e=25
console.log(c+d)
console.log(c-d)
console.log(c*d)
console.log(c/d)
console.log(c%d)

let f= 100, g=10
console.log(f+g)
console.log(f-g)
console.log(f*g)
console.log(f/g)
console.log(f%g)

let h=7, i=5
console.log(h+i)
console.log(h-i)
console.log(h*i)
console.log(h/i)
console.log(h%i)

let j=5+10+15
console.log(j)
console.log(5+10+15)

let q= (2*3*4)
console.log(q)
console.log(2*3*4)

 s=(100/4)
console.log(s)
console.log(100/4)

s= 27%5
console.log(s)
console.log(27%5)

console.log((10+5)*2)




////////////////////////////////// FUNCTIONS //////////////////////////////////////////////
function add(a,b){
    z=(a+b)
    console.log(z)
}
add(2,3)

function subtract(a,b){
    console.log(a+b)
}
subtract(4,0)

function multiply(a,b){
    console.log(a*b)
}
multiply(6,5)

function divide(a,b){
    console.log(a/b)
}
divide(9,3)

function mathOperations(a,b){
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
}
mathOperations(500,5)
mathOperations(8,4)
mathOperations(20,6)

function Sumthreenumber (a,b,c){
    console.log(a+b+c)
}
Sumthreenumber(1,2,3)
Sumthreenumber(3,4,5)
Sumthreenumber(10,20,30)

function sqaure(z){
    console.log(z*z)
}
sqaure(12)

function addp(a,b){
    console.log(a+b)
}
addp(1,1)
