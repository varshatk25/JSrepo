///////////////////////////////////////////// SWITCH CASE
//Switch Case without break  ------------- ISME JAHA SE CONDITION PASS HO RAHI HAI OSKE BAAD K SARE OUTPUT PRINT HONGE.
// switch(value){
//    case value1:
//       // code
//       

//    case value2:
//       // code
//       

//    default:
//       // code
// }

//Check Variable day = "monday"   ;  Monday → Print "Start of week" ; Tuesday → Print "Second day"  ;  Wednesday → Print "Mid week"
let day = 'monday'
switch(day){
    case 'monday':
        console.log("start of week")
    case 'tuesday':
        console.log('second day')
    case 'wednesday':
        console.log("mid week")
  default :
    {console.log('other day')}
}  // the outpu would be  - start of week second day mid week other day - coz yaha braek nahi lagaya hai so 1st satisfied condition se sab print hoga



//check Variable fruit = "apple"; apple → Print "Red fruit"; banana → Print "Yellow fruit"; mango → Print "King of fruits"
let fruit = 'mango'
switch(fruit){
    case 'apple':
        console.log('red fruit')
    case 'banana' :
        console.log('yellow fruit')
    case 'mango' :
        console.log('king of fruits')
    default : 
        console.log('Other fruit')
}

// check Variable grade = "A" ; A → Print "Excellent" ;B → Print "Good"  ;C → Print "Average"

let grade ='B'
switch(grade){
    case 'A':
        console.log('Excellent')
    case 'B':
        console.log('Good')
    case 'C' :
        console.log('Average')
}

//check Variable month = "january"  ; january → Print "Month 1"  ;february → Print "second month"  ;march → Print "third month"
let month = 'march'
switch(month){
    case 'january' :
        console.log('first month')
     case 'february':
            console.log('second month')
            case 'march':
                console.log('third month')
}

// check Variable color = "red" ; red → Print "Stop" ; yellow → Print "Wait" ; green → Print "Go"
let color = 'red'
switch(color){
    case "red" :
        console.log ('stop')
    case "yellow":
        console.log('wait')
    case "green":
        console.log("Go")
}




///////////////////////////////////////Switch Case with break  ------------- isme jaise hi condition satisy hoti hai end hoke bahar hi
// switch(value){
//    case value1:
//       // code
//       break

//    case value2:
//       // code
//       break

//    default:
//       // code
// }

//check Input day = "sunday"; Print weekend or weekday.
let day1 = 'sunday'
switch(day1){
    case 'sunday':
    case 'saturday':
        console.log("weekend")
        break
    case 'monday':
    case 'tuesday': 
    case 'wednesday':
    case 'thursday':
    case 'friday' :
        console.log("weekdays")
        break
    default: console.log('invalid input')
}

//check Input trafficSignal = "red" ;red → Stop;yellow → Wait;green → Go
let trafficSignal = 'green'
switch (trafficSignal){
    case 'red':
    console.log('stop')
    break
    case 'yellow':
        console.log('wait')
        break
    case 'green':
        console.log('Go')
        break
    default:
        console.log('invalid input')
}

//check Input grade = "B" ;A → Excellent;B → Good;C → Average;D → Poor
let grade1 = 'D'
switch(grade1){
    case 'A':
    console.log('Excellent')
    break
    case 'B':
    console.log('Good')
    break
    case'C':
    console.log('Average')
    break
    case'D':
    console.log('Poor')
    break
    default:
        console.log('invalid input')
}

//check Input fruit = "mango" ; mango → Summer fruit ;apple → Winter fruit ; banana → All season fruit
let fruit1 = 'mango'
switch(fruit1){
    case 'mango':
        console.log('summer fruit')
        break
    case 'apple':
        console.log('winter fruit')
        break
    case 'banana':
        console.log('All season fruit')
        break
    default:
        console.log('invlid input')
}

//check Input paymentMode = "UPI" ;UPI → Digital payment ; cash → Physical payment ;card → Card payment
let paymentMode = 'cash'
switch(paymentMode){
    case 'UPI':
        console.log('Digital payment')
        break
    case 'cash':
        console.log('physical payment')
        break
    case 'card':
        console.log('card payment')
        break
    default:
        console.log('invalid input')
}

//////////////////////////////////////////////////////Switch Case with multiple scenarios
//Check city = "nagpur"; pune, nagpur, mumbai → MH ;bhopal, indore → MP; jaipur, udaipur → RJ
let city = 'mumbai'
switch(city){
    case 'pune':
    case 'nagpur':
    case 'mumbai':
        console.log('MH')
    break
    case 'bhopal':
    case 'indore':
        console.log('MP')
    break
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
    braek
    default:
        console.log('invalid input')
}

//Check day = "saturday" ; saturday, sunday → Weekend ;monday-friday → Weekday
let day2='friday'
switch(day2){
    case 'saturday':
    case 'sunday':
        console.log('weekend')
    break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('weekdays')
    break
    default:
        console.log('invalid input')
}

//Check month = "may"; march, april, may → Summer; june, july, august → Rainy; december, january → Winter
let month1 ='may'
switch(month1){
    case 'march':
    case 'april':
    case 'may':
        console.log('summer')
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('rainy')
        break
    case 'december':
    case 'january':
        console.log('winter')
        break
    default:
        console.log('invalid input')

}

//Check marks = "A"; A, A+ → Topper ;B, B+ → Good; C, D → Average
let marks = 'A'
switch(marks){
    case 'A':
    case 'A+':
        console.log('Topper')
        break
    case 'B':
    case 'B+':
        console.log('good')
        break
    case 'C':
    case 'D':
        console.log('Average')
        break
    default:
        console.log('invalid input')
}

//Check vehicle = "bike" ; bike, scooter → Two wheeler; car, bus → Four wheeler
let vehicle = 'bike'
switch(vehicle){
    case 'bike':
    case 'scooter':
        console.log('two wheeler')
        break
    case 'car':
    case 'bus':
        console.log('four wheeler')
        break
}

//////////////////////////////////////////////////////// Switch Case with condition
//CHECK Find largest of 3 numbers using switch.
let x1 = 4, x2=5, x3=6, flag = true
switch(flag){
    case x1>x2&&x1>x3 :
        console.log('x1 is greater')
        break
    case x2>x1&&x2>x3:
        console.log('x2 is greater')
        break
    case x3>x1&&x3>x2:
        console.log('x3 is greater')
        break
    default :
    console.log('invalid input')
}

// Find smallest of 3 numbers using switch.
let x4=9,x5=10,x6=11, flag1= true
switch(flag1){
    case x4<x5&&x4<x6:
        console.log('x4 is smaller')
        break
    case x5<x6&&x5<x4 :
        console.log('x5 is smaller')
        break
    case x6<x5&&x6<x4 :
        console.log('x6 is smaller')
        break
    default:
        console.log('invalid input')
}

// Check if number is // greater than 100 // greater than 50 // otherwise small number.
let num = 1000, flag2 = true
switch(flag2){
    case num>100:
        console.log('number is greater than 100')
        break
    case num>50 && num<100:
        console.log('number is greater than 50')
        break
    default:
        console.log('number is small number')
}

// Check student marks // 90 → Topper // 70 → Good // else → Average
let marks1 = 35, flag3 = true
switch(flag3){
    case marks1>=90:
        console.log('topper')
        break
    case marks1>=70 && marks1<90:
        console.log('good')
        break
    default:
        console.log('average')
}



// Check temperature // 40 → Very hot // 30 → Hot // else → Normal
let temp =40, flag4 = true
switch(flag4){
    case temp>=40:
        console.log('very hot')
    break
    case temp<40 && temp>=30:
    console.log('hot')
    break
    default:
        console.log('normal')
}