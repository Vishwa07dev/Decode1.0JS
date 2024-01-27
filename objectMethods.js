/**const emp = {
    name : "Vishwa",
    age : 99,
    salary : 1000,
    address : {
        city : "Bangalore",
        country : "India"
    }
}
/** 
//List of all the keys in the given object
console.log(Object.keys(emp))

// List of all the values in the given object
console.log(Object.values(emp))

// List of all the key value pairs
console.log(Object.entries(emp)) **/
/** 
console.log(emp)

// assign
emp_new = Object.assign({},emp, {role : "developer"})
console.log(emp_new)



emp.jobType = "remote";

console.log(emp) **/

/** 
const person = {
    name : "Vishwa",
    age : 19
}

console.log(person)
Object.seal(person)
person.name = "Ritik"
console.log(person)

person.hobby = "cricket"
console.log(person)
delete person['hobby']
console.log(person)
/** 
console.log(person)
Object.freeze(person) //Object is now freezed and it can't be changed

console.log(Object.isFrozen(person))

person.name = "Ritik"
person.hobby = "cricket"
delete person["name"]

console.log(person)
**/



const person = {
    name : "Vishwa",
    age : 19,
    salary : 7000
}

Object.defineProperties(person,{
    salary : {
        value : 7000,
        enumerable : false
    }
})

for ( k in person){
    console.log(k)
}

//Object.freeze(person)
//console.log(Object.getOwnPropertyNames(person)) ; // Object.keys(person)

console.log(Object.getOwnPropertyDescriptors(person))



/** 
console.log(Object.hasOwn(person,"name"))
console.log(Object.hasOwn(person,"company")) **/

