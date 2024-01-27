const mechanic = {
    name : "Vishwa",
    fixItem : function(itemName){
        console.log(`${this.name} ${itemName} ${this.age} has been fixed`)
    }
}

const person = {
    name : "Mohan",
    age : 99
}

const person2 = {
    age : 99
}

mechanic.fixItem.call(person,"Refrigerator", "xyz")

mechanic.fixItem.apply(person,["Refrigerator", "XYZ" , "Vishwa" , "Moahn"] )

console.log(mechanic.fixItem.bind(person,'Refrigerator', "xyz" ))

mechanic.fixItem.bind(person,'Refrigerator', "xyz" )()