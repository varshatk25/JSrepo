/////////////////////////////////////////////////////////// CONDITION Statement //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////// IF 
// if(condition){
//     // statement
// }
// ye sari condition check karta hai and accordingly result dega

//CHeck If temperature > 40 → print "Very Hot" ;If temperature > 30 → print "Hot";If temperature > 20 → print "Pleasant"
let temp = 42
if (20<temp && temp<30){
    console.log("Pleasent")
}
if (temp>30 && temp< 40){
    console.log("HOT")
}
if (temp>40){
    console.log("Very hot")
}

//  check If number > 0 → print "Positive"; If number < 0 → print "Negative"
let num=6
if(num > 0){
    console.log("Positive")
}
if(num<0){
    console.log("Negative")
}

//check If age > 12 → print "Teenager" ; If age > 18 → print "Adult"
let age = 15
if (age>12 && age <18){
    console.log("Teenager")
}
if (age>18){
    console.log("adult")
}

// check If salary > 20000 → print "Basic tax applicable" ; If salary > 50000 → print "High tax applicable"
let sal = 50001
if (sal> 20000 && sal<50000){
    console.log("Basic Tax applicable")
}
if (sal>50000){
    console.log("High tax applicable")
}

//check If marks > 50 → print "Pass"; If marks > 80 → print "Excellent"
let marks =81
if (marks>50 && marks<80){
    console.log ("Pass")
}
if (marks>80){
    console.log("Excellent")
}


///////////////////////////////////////////////////////////////////////////////  if – else if – else
//sequence me check karega condition jab satisfy ho jayegi oske baad bahar aa jayega and remaining condition check nahi hogi

    let numT2 = 17
if(numT2 > 0 && numT2 <= 5){
    console.log("10 % discount")  
}
else if(numT2 > 5){
    console.log("20 % discount")  
}
else if(numT2 > 10){
    console.log("30 % discount")  
}
else {
    console.log('incorrect input')
}

// Check number-- 0 → "Positive" < 0 → "Negative" else "Zero"
let nums= 0
if(nums> 0){
    console.log("positive")
}
else if (nums<0){
    console.log("Negative")
}
else{
    console.log("zero")
}


//Check age < 13 → "Child"  13–19 → "Teenager"  ≥ 20 → "Adult"
let ageis= 7
if(ageis<13){
    console.log("child")
}
else if(ageis>=13 && ageis<=19){
    console.log("Teenager")
}
else {
    console.log("Adult")
}


// chekc Shopping discount  purchase ≤ 1000 → 5%   purchase ≤ 5000 → 10%    purchase > 5000 → 20%
let purchase = 6000
if(purchase <=1000 ){
    console.log ("shopping discount 5%")
}
else if (purchase > 1000 && purchase <= 5000){
    console.log("shopping discount 10% ")
}
else if (purchase >5000){
    console.log("shopping disount 20%")
}


//Chekc Internet speed 100 → "Fast" ; 50 → "Moderate"; else "Slow"
let Ispeed= -5
if(Ispeed>=100){
    console.log("speed is high")
}
else if (Ispeed<100 && Ispeed >= 50){
    console.log("Speed is moderate")
}
else {console.log("SPeed is slow")}



// check Temperature category  35 → "Very Hot"  25 → "Warm"   else "Cool"
let temp1=27
if(temp1>= 35){
    console.log("HOT")
}
else if(temp1<35 && temp1 >=25){
    console.log("WARM")
}
else {console.log("cool")}


/////////////////////////////////////////////////////////////////////////////// tenary operator
// condition ? statement1:statement2

//Check even or odd number
let num1 = 8
num1%2 === 0 ? console.log("even") : console.log ("odd")

//Check positive or negative
let num2=-9
let result1 = num2>=0 ? "number is positive" : "number is negative"
console.log(result1)

//Check adult or minor
let age1 = 89
let agex = age1<=18 ? "minor" : "Adult"
console.log(agex)

//Check pass or fail
let marks1 = 33
let result2 = marks1>=35 ? "Pass" : "Fail"
console.log(result2)


//Check greater number between two numbers
let num3 = 7, num4 = 9
let result3 = num3>num4 ? "num3 is greater" : "num4 is greater"
console.log (result3)


///////////////////////////////////////////////////////////////// Marks / Grade Programs

//Student grade system
let marks2 = 8
if (marks2>=90){
    console.log ("Grade A")
}
else if (marks2 >=80 && marks2 <90){
    console.log("Grade B")
}
else if (marks2 >= 70 && marks2< 60){
    console.log("Grade C")
}
else if (marks2>=60 && marks2 <50){
    console.log("Grade D")
}
else (console.log ("fail"))

//Scholarship eligibility (>85)
let marks3 = 77
let result4 = marks>85 ? "eligible for scolarship" : "NOT eligible for scolarship"
console.log (result4)

//Pass/Fail check (pass if ≥35)
let marks4 = 32
if (marks4>= 35) {
    console.log ("Pass")
}
else (console.log("fail"))

//Distinction if ≥75

let marks5 = 77
let result5 = marks >= 75 ? "DISTINCTION" : "AVERAGE"
console.log (result5)

//Sports team selection if fitness score >70
let score =89
let fitness_score = score>70 ? "Selected" : "not selected"
console.log (fitness_score)




/////////////////////////////////////////////////////////////////// Greatest Number Logic
//Find greatest among 3 numbers
let num6 =90, num7=78, num8= 65
if (num6>num7 && num7>num8) {
    console.log("num6 is graeter")
}
else if (num7>num6 && num7> num8) {
    console.log("num7 is greater")
}
else if (num8>num6 && num8> num7){
    console.log("num8 is greater")
}
else (console.log("invalid input"))

//Find greatest among 2 numbers
let num9 = 67, num10 = 78
let result7 = num9>num10 ? "num9 is greater" : "num10 is greater"
console.log (result7)

//Find greatest among 4 numbers
let n1 =8, n2=9, n3=6, n4=3
if (n1>n2 && n1>n3 && n1>n4 ){
    console.log ("n1 is graeter")
}
else if (n2>n1 && n2>n3 && n2> n4){
    console.log("n2 is greater")
}
else if (n3>n1 && n3>n2 && n3>n4){
    console.log("n3 is graeter")
}
else if (n4>n1 && n4>n2 && n4>n3){
    console.log("n4 is greater")
}
else (console.log("Invalid input"))


//Find highest marks among 3 students
let s1=90, s2=89, s3=80
if (s1>s2 && s1>s3){
    console.log("s1 score highest")
}
else if (s2>s3 && s2>s1){
    console.log("S2 scored highest marks")
}
else if (s3>s1 && s3>s2){
    console.log("S3 scored highest")
}
else (console.log("Invalid input"))


//Find highest salary among 3 employees
let sal1=90000, sal2=89000, sal3=80000
if (sal1>sal2 && sal1>sal3){
    console.log("sal1 has highest salary")
}
else if (sal2>sal3 && sal2>sal1){
    console.log("sal2 has highest salary")
}
else if (sal3>sal1 && sal3>sal2){
    console.log("sal3 has highest salary")
}
else (console.log("Invalid input"))