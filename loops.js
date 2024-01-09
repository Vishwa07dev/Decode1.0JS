//console.log("Hello Students")

//Loop for
/** 
for(i=0;i<10;i++){
    console.log(i)
    console.log("Hello Students")
} **/


// Loop in the decrementing order
/*
for(i=10;i>0;i--){
    console.log(i)
    console.log("Hello Students")
}

// 1 to 20, print all the even numbers  for loop + conditionals
/**
for(i=1; i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}


for(i=2;i<=20;i=i+2){
    console.log(i)
} **/

/** 
for(i=0,j=10; i<j; i++,j--){
    console.log("Hello Students , i,j :" + i + ","+ j)
}**/

/** 
for ( person=1 ;person<=5;person++){
    console.log("Welecome person " + person)
    //Feed the 7 food items to person 1
    for(food=1;food<=3;food++){
        console.log("Feeding food item "+ food)
    }
} **/
/** 
for ( i=0;i<5;i++){
    process.stdout.write("* ")
}
console.log()*/
/*
for ( row =1 ; row<=5;row++){
    for (col=1 ;col<=5;col++){
        process.stdout.write("* ")
    }
    console.log()
}
console.log("Approach two ")
for ( row =1 ; row<=5;row++){
    row_content =""
    for (col=1 ;col<=5;col++){
        row_content = row_content + "* "
    }
    console.log(row_content)
} */

/*
for( row =1 ;row<=5;row++){
    for ( col=1;col<=row;col++){
        process.stdout.write("* ")
    }
    console.log()
}*/
/** 
for ( row =5;row>=1;row = row-1){
    for ( col=1;col<=row;col++){
        process.stdout.write("* ")
    } 
    console.log()
} **/
/** 
console.log('Using break :::: ')

for( i=1;i<5;i++){
    if(i==3){
        break;
    }
    console.log("Please have food")
}

console.log("Using continue")

for( i=1;i<5;i++){
    if(i==3){
        continue;
    }
    console.log("Please have food")
}
**/
/** 
for(i=1;i<=3;i++){
    console.log("i= "+ i)
    for(j=1;j<3;j++){
        console.log("Inside j, value of j ="+ j)
        break
    }
}

*/
/** 
let age =11

while(age<19){
    console.log("Drinking is not allowed")
    age = age+1
}
**/
/** 
let age =11

while(true){
    console.log("Drinking is not allowed")
    age = age+1
    if(age>=20){
        break
    }
}

**/
/**
right_swaps =10  // 3, 7, 9
while(right_swaps >= 0){
    
    if(right_swaps ==3 || right_swaps ==7 ||right_swaps ==9){
        right_swaps = right_swaps -1
        continue;
    }
    right_swaps = right_swaps -1
    console.log("Keep swiping right")
    
} **/

i=10
do{
    console.log("Hello Students")
    i--
}while(i>5)





