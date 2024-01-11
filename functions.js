
/**
function greet_students(){
    console.log("Hi")

    console.log("Welcome to the 7 PM class")

    console.log("Keep learning")   
}

greet_students()
greet_students()

greet_students()




// Function to add two numbers

function sum(a,b){
    console.log("inside the sum function")
    return a+b 
}


result = sum(5,6)
console.log(result)




function fact(num){
    if(num==0 || num ==1){
        return 1
    }

    result =1

    for (i=1 ;i<=num;i++){
        result = result*i
    }
    return result
}


console.log(fact(999))

**/
/** 
const hello_func = function hello(){
    console.log("Hello my dear students")
}
const hello_func = function (){   //Anonymous function
    console.log("Hello my dear students")
}

hello_func()
//hello() 

const sum_func = function sum1(a,b){
    return a+b
}

console.log(sum_func(1,5)) **/

/** 
function operate(a,b,fn){
    console.log(fn(a,b))
}

function sum2(a,b){
    return a+b
}

operate(5,6,sum2)  

function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}

function func1(){
    console.log("Hello from outer")
    return  function (){
        console.log("Hello from inner")
        return function (){
            console.log("Hello from innermost")
        }
    }
}

func2() **/
/** 
function sum(a,b){
    return a+b;
}

console.log(sum(5));

**/

/**
 * This is a sum function which can add any number of arguments
 */
function sum(){
   console.log(arguments)

   let sum =0 
   for(i=0;i<arguments.length;i++){
    sum = sum + arguments[i]
   }
   return sum
}

console.log(sum(5,6));

console.log(sum(5,6,7,8));


function func(){
    func=43
    console.log(func)
}

func()