const useremail = "y@yash.ai"

if(useremail){
    console.log("Got user Email.")
}else{
    console.log("Don't have user Email.")
}

// falsy values 
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN, 
// truthy values 
// "0", 'false', " ", [], {} ,function(){} 

// if (useremail.length === 0) { 
//     console.log("Array is empty")
// } 

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is Empty")
}

// Nullish Coalescing Operator (??): null undefined 
// let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// Terniary Operator 
// condition ? true : false 

const iceteaprice= 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80") 
