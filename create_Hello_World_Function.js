// Problem statement

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


function createHelloWorld(){
    return(
        ()=>{
            return "Hello World";

        }
    )

    
}
var value= createHelloWorld();


console.log(value());


// A function must be called to use it