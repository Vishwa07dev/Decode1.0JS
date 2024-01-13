/** 
arr = [3,4,5,6,7,8]

console.log(arr)

console.log(arr.pop())

console.log(arr)


// add 11 at the end

arr.push(11)  -> It will return the length of the new modified array

console.log(arr)



fruits = ["Mango", "Apple", "Papaya"]

f = fruits.pop()

console.log(f)



fruits.push("WaterMelon")

console.log(fruits)
**/
/**
 * Remove from the first position
 

arr = [5,2,1,9,7,6]

x = arr.shift()

console.log(x)

console.log(arr)

console.log(arr.unshift(51))

console.log(arr)

**/


//concat
/** 
arr1 = [3,4,5,6]
arr2 = [7,8,9,6]

arr = arr1.concat(arr2)
console.log(arr)
console.log(arr.length)

arr_new = arr1 + arr2 // -> Create a new string
console.log(typeof arr_new)
console.log( arr_new) 


// join method

let fruits = ["Apple", "Banana", "Carrot"]

let result = fruits.join()
console.log(result)
console.log(typeof result)

let result2 = fruits.join("-")
console.log(result2)

arr=[1,2,3,4]
console.log(typeof arr.join())




//Slicing 

let arr = [5,7,1,2,9,11,15,12,6]


sliced_arr = arr.slice(2,5);

console.log(sliced_arr)

console.log(arr.slice())  // if no argument, then no action -- entire array will be returned

console.log(arr.slice(2))  // take out the array starting from 2nd index

console.log(arr.slice(0,4))

console.log(arr.slice(-1, -4))

console.log(arr.slice(-4, -1))

console.log(arr.slice(-10, -1))



// splice() method

arr = [ 3,2,1,5,4,9,11,8]

arr.splice(4,0,4,51,56,99)

console.log(arr)

console.log(typeof arr)


arr = [1,2,3,4,5]
arr.reverse()

console.log(arr)

**/

//sorting
/** 
arr = [5,4,1,2,9,3]

arr.sort((a,b)=> b-a)

console.log(arr)

**/

/**
 arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16]

arr.sort((a,b)=> a-b)
console.log(arr)

**/

/** 
arr = [3,4,5,1,7]

str = arr.toString()

console.log(str)
console.log(typeof str) 

arr = [3,4,5,[7,9,1]]
flat_array = arr.flat()
//console.log(flat_array)
//console.log(arr)


arr2 = [1,2,3,[4,5,[7,8,[9,10,11]]]]

console.log(arr2.flat())   // flat() - does ist level of flattening

console.log(arr2.flat(2)) 

console.log(arr2.flat(3))

console.log(arr2.flat(4))
console.log(arr2.flat().flat().flat())

**/

arr= [1,2,3,4,5]

console.log(Array.isArray(arr))

str = "I am Vishwa"
console.log(Array.isArray(str))
