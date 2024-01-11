/** 
function add(a,b){
    console.log("Inside the add function");
    return a+b
}

const add1 = (a,b) =>{
    console.log("Inside the add function");
    return a+b
}
const,let and var
console.log(add(5,6))
console.log(add1(5,6))  **/

/** 
const hello = () =>{
    console.log("Hello World")
}


// Function with multiple arguments and return

sum_three = (a,b,c)=> {
    console.log("inside sum three");
    return a+b+c ;
}

console.log(sum_three(4,5,6))

//Function with no returns

greet = (name ) =>{
    console.log("Hello "+name)
}
greet('Vishwa')


sum1 = (a,b)=>{
    console.log(arguments)
    return a+b ;
}

sum = (a,b)=>  a+b

console.log(sum1(5,6))

**/

function findEvenOrOdd(num){
    if(num%2 ==0){
        return "Even"
    }else{
        return "False"
    }
}

console.log(findEvenOrOdd(24))

// Conver the above function as arrow function

myFun = (num)=>{
    if(num%2 ==0){
        return "Even"
    }else{
        return "False"
    } 
}
console.log(myFun(23))


typ = (a) =>(a%2==0 )? "Even" : "Odd"  // Single line : Arrow + Ternary operator
    
console.log(typ(9))









