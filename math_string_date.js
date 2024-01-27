/** 
console.log(typeof Math)


//Minimum of two numbers
console.log(Math.min(5,-7))

//Getting all the properties of the object Math

console.log(Object.getOwnPropertyNames(Math))

console.log(Math.PI)
console.log(Math.abs(-5))

**/


/**
 * String :
 * 
 *    1. immutable
 *    2. sequence of characters
 */

let name = "Vishwa"   // '' or ""

//Access the character based on index
console.log(name[2])

//immutable
name[2]="M"
console.log(name)

//length
console.log(name.length)

//Find the character at any given index
console.log(name[2])
console.log(name.at(2)) // You can also put negative indexes
console.log(name.charAt(2))

console.log(name.at(-2))

// String concatenation
first_name = 'Vishwa'
last_name = 'Mohan'
//full_name = first_name + last_name
full_name = first_name.concat(last_name)
//full_name = first_name, last_name // no concatenation here
console.log(full_name)

//Search a substring in a given string
str = "I am mad for teaching"
console.log(str.includes("mad"))
console.log(str.includes("Vishwa"))

//I want to know the starting index of sub string
console.log(str.indexOf("mad"))
console.log(str.indexOf("Vishwa"))

//I want to repeat the string
console.log("Hello \n".repeat(11))

//Replace sub strig
str = " I am Vishwa Mohan Mohan"
console.log(str.replace("Mohan", "Singh"))
console.log(str.replaceAll("Mohan", "Singh"))


str = "Vishwa$Mohan$Singh"
console.log(str.slice(4,8))
console.log(str.slice(4))
console.log(str.slice(-3))

// convert string to an array
arr = str.split("$")
console.log(arr)


arr= ["I","am","Vishwa"]
console.log(arr.join())


arr= [3,10,21,93,104]
arr.sort((a,b) => a-b)
console.log(arr)
