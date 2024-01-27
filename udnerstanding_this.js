
/**
function func(){
    console.log(this)
}

func(); **/

/**
 * Using this inside the JS Objects
 */
/*
name = "Akshay"
const obj = {
    name : 'Vishwa',
    age : 99,
    alias : this.name + " " + "Mohan",
    greet : function(){
        console.log(this.name)  // obj.name
    },
    greet2 : ()=> console.log(this.name),
    address : {
        city : "Banaglore",
        country : this.name + " " + "India",
        name : "Al Saif",
        greet1 : function(){
            console.log(this.age)
        }
    }
}

obj.address.greet1()

obj.greet()
obj.greet2()
//console.log(obj.alias)
//console.log(obj.address.country) */

/**
 * Constructor function
 */

function Person(name){
    this.name = name
}

const person_obj = new Person("Vishwa")
console.log(person_obj)
console.log(person_obj.name)