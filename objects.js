/** 
const person = {
    name : "Vishwa",
    age : 99,
    city : "Banaglore"
}

console.log(typeof person);

console.log(person) 


const user = {
    true : "Vishwa",
    2 : "Mohan",
    3 : "Sheetal"
}

console.log(user) 


const person = {
    name : "Vishwa",
    age : 99,
    greet : function () {
        console.log("Hello Students")
    }
} 


const obj = new Object()

console.log(obj) 


function emp(id, name , salary){
    this.emp_id = id ;
    this.name = name;
    this.salary = salary
}

const emp_obj = new emp(1,"Vishwa", 7000)
console.log(emp_obj) 


const student = {
    name : 'Rohan',
    age : 19,
    address : {
        city :  "Bangalore",
        state : "Karnataka",
        pincode : 560049
    }
}

console.log(student)

// I would like to read the properties of students
console.log(student.name)
console.log(student.age)

//Using bracket notation
console.log(student["name"])

// Print the city of the student
console.log(student.address.city)

console.log(student['address'].city)

console.log(student['address']['city']) **/


/**
 * I would like to insert the new fields
 */
/** 
const person = {}

person.name = "Vishwa";
person.hobby = "cricket"
person["country"] = "India"

console.log(person)

person.name = "Kareena"  //Update the fields of the object

console.log(person)

//Delte certain fields

delete person["name"];
console.log(person)

delete person;

console.log(person) **/


