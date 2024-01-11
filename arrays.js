/*
let arr_nums = [1,2,3,4,5]
console.log(arr_nums)

//Find the element in the given index
console.log(arr_nums[0])
console.log(arr_nums[4])
console.log(arr_nums[7])

//Finding the length of the array
console.log(arr_nums.length)


//Other way of defining array

// 2nd way of creating array
arr = Array(1,2,3,4,5)

console.log(arr[-1])

empty_arr = Array(5)
console.log(empty_arr)

// 3rd way of creating arrays Constructor way

fruits = new Array("Apple", "Mango", "Banana")
console.log(fruits)

/**
 * Deleting the element from the array
 * 
 *  Should not use it
 */

arr = [1,2,3,4,5,6]

//console.log(arr)
//console.log(arr.length)

//delete arr[2]

//console.log(arr)
//console.log(arr.length)

/**
 * How do it iterate ?
 * 
 * for loop
 


for(i =0;i<arr.length;i++){
    console.log(arr[i])
}

**/

/** 
function sum_arr(arr){
    sum =0
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i]

    }
    return sum
}


console.log(sum_arr([3,4,2,1,5]))

**/


arr = [3,4,2,1,5]

for( num of arr){  //foreach loop
    console.log(num)
}
