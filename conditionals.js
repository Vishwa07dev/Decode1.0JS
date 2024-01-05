/**
 * 
 * 
 *     firstNum = 10
 * secondNum  =2
 * 
 * 
 *    result = firstNum/secondNum
 * 
 * a/b
 * 
 */
/** 
var a = 10
var b = 0

if( b !=0){
    console.log('Inside if block')
    console.log(a/b)
}

console.log("After if")
**/

var num = 24


//Check if it's even
/** 
if(num % 2 ==0){
    console.log("Num is even")
}else{
    console.log('num is odd')
}
**/


//console.log( (num%2 ==0) ? "Num is even" : "Number is odd" )
/** 
var num = 20

// Check if the number is divisible by 2 or 3 or 5 or not by any of these

if( num %2 ==0){
    console.log("num is divisible by 2")

}else if (num %3==0){
    console.log("num is divisible by 3")
}else if (num %5 ==0){
    console.log("num is divisible by 5")
}else{
    console.log("num is not divisible by 2 or 3 or 5")
}

**/
var a = 12
var b = 12
var c = 12
// Find the greatest number
/** 
if ( a> b){
    if ( a > c){
        console.log("a is greatest")
    }else{
        console.log("c is greatest")
    }
}else{
    if (b > c){
        console.log("b is greatest")
    }else{
        console.log("c is greatest")
    }
} **/

/** 
amount = 450

day = "Monday"

// Write the code to get the final price

/**
 *  <100 -> 10%
 * 100-200 -> 20%
 * 200-500 -> 30%
 * >500 -> 40%
 * 
 * Monday -> Rs 10
 */
/** 
var final_amount = amount


//Discount based on amount
if(amount <=100){
    //10% discount
    final_amount = final_amount - 0.1*final_amount
}else if(amount >100 && amount <=200){
    final_amoumt = final_amount - 0.2*final_amount
}else if(amount >200 && amount <=500){
    final_amount = final_amount - 0.3*final_amount
}else{
    final_amount = final_amount - 0.4*final_amount
}

/** 
final_amount = amount<=100 ? final_amount - 0.1*final_amount : 
(amount >100 && amount <=200) ? 
final_amoumt = final_amount - 0.2*final_amount :(amount >200 && amount <=500)?final_amount = final_amount - 0.3*final_amount:
final_amount = final_amount - 0.4*final_amount
**/

/** 
//Discount based on the day
if(day=="Monday"){
    final_amount = final_amount -10
}

console.log("Final price is ", final_amount)

num = 20
num%2==0 ?console.log("is even") : console.log("is odd")

**/


/** 
var day = 9 // I would like to print which day it is

switch(day){
       
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break ;
    case 2 :
        console.log("Tuesday");
        break ;
    case 3 :
        console.log("Wednesday");
        break ;
    case 4 :
        console.log("Thrusday");
        break ;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    default :
        console.log("Not a valid number");
     
    
   
        
    
}


console.log("Hello World")

**/


// A -> Excellent , B -> Average , C -> Needs improvement

var grade = "B"

switch (grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Average");
        break;
    case "C":
        console.log("Needs Improvement");
        break;
    default :
        console.log("You have bunked exam");
        break;
}


if(grade == "A"){
    console.log("Excellent");
}else if(grade =="B"){
    console.log("Average");
}else if(grade=="C"){
    console.log("Needs Improvement")
}else{
    console.log("You have bunked classes")
}





































































