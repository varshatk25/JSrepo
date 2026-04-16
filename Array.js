////////////////////////////////////////////////////////////////////////////////  ARRAY  ///////////////////////////////////////////////////////////
//Array एक data structure है जिसमें multiple values एक variable में store की जाती हैं।
//Array में different data types भी store हो सकते हैं।

let nums = [11,22,33]
let names = ["chinmay","deshpande","shirish"]
let info = ["chinmay",7709192441,34]

////////////////////////////////////////////////////////////////// INDEX CONCEPT
//Array में elements का index 0 से start होता है।
let info1 = ["chinmay",7709192441,34]
console.log(info1[0])     // output will be > chinmay

//check एक array numbers बनाइए [5,10,15,20] और पहला element print कीजिए।
let anum = [5,10,15,20]
console.log(anum[0])

//check colors = ["red","blue","green","yellow"] में से तीसरा element print कीजिए।
let acolor = ['red','blue','green', 'yellow']
console.log(acolor[2])

// check cities = ["pune","mumbai","delhi","jaipur"] का second index print कीजिए।
let cities=['pune', 'mumbai', 'delhi', 'jaipur']
console.log(cities[1])

//check students = ["amit","rahul","neha"] का last element print कीजिए।
let stu = ['amit', 'rahul', 'neha']
console.log(stu[stu.length-1])
// check marks = [80,70,60,90] में से first और last element print कीजिए।
let marks = [80, 70, 60, 90]
console.log(marks[0])
console.log(marks[marks.length-1])

// IN JavaScript everyting is object and object hai to property and methods hai

/////////////////////////////////////////////////////////////////  Array Length Property
console.log(info1.length)  // output will be 3 as info1 me 3 element hai hence its length will be 3

//check fruits = ["apple","banana","mango"] का length print कीजिए।
let fruits = ['apple', 'banana', 'mango']
console.log(fruits.length)

// check numbers = [10,20,30,40,50] का length print कीजिए।
let num = [10, 20, 30, 40 ,50]
console.log(num.length)

// check cities = ["pune","mumbai","delhi"] का last element length से find कीजिए।
let citi = ['pune', 'mumbai', 'delhi']
console.log(citi[citi.length-1])

// check colors = ["red","blue","green","yellow"] का last index print कीजिए।
let color = ['red','blue','green','yellow']
console.log(color.length-1)

// check students = ["amit","rahul","neha","sita"] में total students count print कीजिए।
let stu1 = ['amit','rahul','neha','sita' ]
console.log(stu1.length)


/////////////////////////////////////////////////////////////////  Array LAST ELEMENT
console.log(info1[info1.length - 1])  // // output will be 34

////////////////////////////////////////////////////////////////  Looping through Array
//Array elements को access करने के लिए loops use करते हैं।
//                 0         1         2          3
let countries = ["india","england","srilanka","bangladesh"]
for(i=0; i<countries.length; i++){
    console.log(countries[i])
}

for(i=countries.length-1; i>=0; i--){
    console.log(countries[i])
}

let i1=0
while(i1<countries.length){
    console.log(countries[i1])
    i1=i1+1
}

console.log()

let i2=countries.length-1
while (i2>=0){
    console.log(countries[i2])
    i2=i2-1
}

// check numbers = [10,20,30,40] के सभी elements print कीजिए।
let num2 = [10,20, 30, 40]
for(i=0; i<= num2.length-1; i=i+1){
    console.log(num2[i])
}

//check fruits = ["apple","banana","grapes"] loop से print कीजिए।
let fruit=['apple','banana','grapes']
let i =0
while(i<fruit.length){
    console.log(fruit[i])
    i=i+1
}

// check cities = ["pune","mumbai","delhi","jaipur"] index और value दोनों print कीजिए।
let citi1 = ['pune', 'mumbai', 'delhi', 'jaipur']
for(i=0; i<citi1.length; i=i+1){
    console.log(i)
    console.log(citi1[i])
}

// check colors = ["red","blue","green"] reverse order में print कीजिए।
let color1 = ['red', 'blue', 'green']
let i3=color1.length-1
while(i3>=0){
    console.log(color1[i3])
    i3=i3-1
}


// check marks = [50,60,70,80] loop से print कीजिए।
let mark = [50, 60, 70, 80]
for(i=0; i<mark.length; i=i+1){
    console.log(mark[i])
} 

// check numbers = [5,10,15,20] while loop से print कीजिए।
let num3 = [5, 10,15, 20]
let i4 = 0
while(i4<num3.length){
    console.log(num3[i4])
    i4=i4+1
}

// check fruits = ["apple","banana","grapes"] while loop से print कीजिए।
let fruit1 =['apple', 'banana', 'grapes']
for (i=0; i<fruit1.length; i=i+1){
    console.log(fruit1[i])
}

// check cities = ["pune","mumbai","delhi"] while loop से print कीजिए।
let citi2 = ['pune', 'mumbai', 'delhi']
let i5=0
while(i5<citi2.length){
    console.log(citi2[i5])
    i5=i5+1
}
// check colors = ["red","blue","green"] while loop से print कीजिए।
let color3 = ['red', 'blue', 'green']
for(i=0; i<=color3.length-1; i=i+1){
    console.log(color3[i])
}

//marks = [80,70,90] while loop से print कीजिए।
let marks1 = [80, 70, 90]
let i6= 0
while(i6<marks1.length){
    console.log(marks1[i6])
    i6=i6+1
}

////////////////////////////////////////////////////////////////Array Methods (Add / Remove)
// property - length
// methods - push(), pop(),shift(), unshift()

// Method	      Work
// push()	      End में element add करता है
// unshift()	  Start में element add करता है
// pop()	      End से element remove करता है
// shift()	      Start से element remove करता है

// These method may perform different action and can return different value.
// for example push and unshift method- add element at last and first of the array respectively, however it returns the new length of array
// and pop and shift will remove the element from end and start of array respectively and it returns the value of element which is removed

//          0         1        2
names = ["chinmay","shrish","sachin"]
let q1 = names.push("raj")
console.log(q1)
console.log(names)

names = ["chinmay","shrish","sachin"]
let q2 = names.unshift('sameer')
console.log(names)
console.log(q2)


names = ["chinmay","shrish","sachin"]
let q3 = names.pop()
console.log(q3)
console.log(names)

names = ["chinmay","shrish","sachin"]
let q4 = names.shift()
console.log(q4)
console.log(names)

console.log(q4)

// check names = ["amit","rahul"] में "neha" push कीजिए।
    let name = ['amit', 'rahul']
    let q5 = names.push('neha')
    console.log(q5)
    console.log(names)

// check numbers = [10,20,30] में 40 push करके array print कीजिए।
let num4 = [10,20,30]
let q6 = num4.push(40)
console.log(num4)
console.log(q6)

// check fruits = ["apple","banana","grapes"] में last element pop कीजिए।
let fruit2 = ['apple', 'banana', 'grapes']
let q7 = num.pop()
console.log(q7)
console.log(fruit2)

// check cities = ["pune","mumbai","delhi"] में pop करके removed element print कीजिए।
let citi3 = ['pune', 'mumbai', 'delhi']
let q8 = citi3.pop()
console.log(q8)
console.log(citi3)


// check colors = ["red","blue"] में "green" unshift कीजिए।
let color4 = ['red', 'blue']
let q9 = color4.unshift('green')
console.log(color4)
console.log(q9)

//animals = ["dog","cat","lion"] में "tiger" unshift कीजिए।
let animals = ["dog","cat","lion"] 
let q10 = animals.unshift('tiger')
console.log(q10)
console.log(animals)


//students = ["amit","rahul","neha"] में first element shift कीजिए।
let students = ["amit","rahul","neha"]
let q11 = students.shift()
console.log(q11)  // removed value - amit
console.log(students)

//cars = ["bmw","audi","tata"] में shift करके removed element print कीजिए।
let cars = ["bmw","audi","tata"]
let q12 = cars.shift()
console.log(q12) // bmw- o/p
console.log(cars)

//languages = ["javascript","python"] में "java" push कीजिए।
let languages = ["javascript","python"]
let q13 = languages.push("java")
console.log(q13)
console.log(languages)

//players = ["virat","rohit","dhoni"] में pop करके नया array print कीजिए।
let players = ["virat","rohit","dhoni"]
let q14 = players.pop()
console.log(q14)
console.log(players)

//////////////////////////////////////////////////////////////////////////////////////// map() filter(); reduce(); forEach()
//Traditional loops work, but array methods (map, filter, reduce) are cleaner and modern
// Use:
// map() → transform ( every element of array); हर element पर function apply करता है; एक नया array return करता है; original array को change नहीं करता
// filter() → condition
// reduce() → calculation
// forEach() → iteration


//                 0    1    2    3 
let birthYear = [2000,2001,2002,2003]
let ages= []
for(i=0; i<birthYear.length; i=i+1){
    //console.log(i)
    //console.log(birthYear[i])
    console.log(2026-birthYear[i])
    //console.log()
    ages.push(2026-birthYear[i])
}
console.log(ages)

////////////////////////////////////////////////Map() is Better alternative to loop; creates a new array by transforming each element;
//                 0    1    2    3 
let birthYear2 = [2000,2001,2002,2003]
let ages2= birthYear2.map(function(el,index,arr){ 
    //console.log(el,index,arr) 
    return 2026 - el 
}) 
    console.log(ages2)


// Convert an array of numbers into their squares
//👉 [2,3,4] → [4,9,16]
let num1 =[5,6,7,8,9,10]
let sq1=num1.map(function(el,index, arr){
return el*el
})
console.log(sq1)


//Add 5 to each element in an array
let num5 = [1,2,3,4,5,6,7,8,9]
let add5 = num5.map(function(el,index,arr){
   return el+5
})
console.log(add5)


//Convert an array of birth years to ages (use 2026)
let bY= [2000,2001,2002,2003,2004,2005]
let ages3 = bY.map(function(el,index,arr){
    return 2026-el
})
console.log(ages3)


//Convert all strings to uppercase
//👉 ["ram","shyam"] → ["RAM","SHYAM"]
let S1 = ['ram', 'shyam,']
let arr1 = S1.map(function(el, index, arr){
    return el.toUpperCase()
})
console.log(arr1)


//Multiply each number by 2
let num6= [0,9,8,7,6,5,4,3,2,1]
let mult= num6.map(function(el,index,arr){
    return el*2
})
console.log(mult)

///////////////////////////// filter() → condition returns elements that match a condition; Returns New Array - Select data based on condition
//Although it can be done with let marks2= [40,50,60,70,80,90]
let distinction= marks2.filter(function(el,index,arr){
    return el>60
})
console.log(distinction)


///////////////////////////////////// reduce()  -- Perform calculation (sum, avg etc.); returns single value not array
//want the sum of all the array element; we can do it by for looop
let num77 = [11,22,33]
let sum=0
for (i=0; i<num77.length; i=i+1){
     sum = sum+ num77[i]
}
console.log(sum)

//with reduce() it would be much easier
num77.reduce(function(acc,el,index,arr){
    return acc+el
},0)

//Find sum of all numbers
let num11= [11,22,33,44,55,66]
let q99= num11.reduce(function(acc,el,index,arr){
    return acc+el
},0)


//Find product (multiplication) of all numbers
let num12= [1,2,3,4]
let q89= num11.reduce(function(acc,el,index,arr){
    return acc*el
},1)
console.log(q98)

//Find maximum number in array
let q99= num11.reduce(function(acc,el,index,arr){
if (acc<=el){
    acc=el
    return acc
}
else if (acc>el){
    return acc
}
},0)
console.log(q99)

//Find minimum number
let q97= num11.reduce(function(acc,el,index,arr){
if (acc<=el){
    acc=el
    return acc
}
else if (acc>el){
    return acc
}
},0)
console.log(q97)

//Count total number of elements (without using .length)
let num13 = [10, 40, 30, 50, 60]
let q96 = num13.reduce(function(acc,el, index, arr){
    return acc+1
},0)
console.log(q96)


