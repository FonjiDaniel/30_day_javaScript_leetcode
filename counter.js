// problem statement
// Given an interger n, return a counter function. 
// This counter function initially returns 1 more than the 
// previous value every subsequent time it is called (n, n+1, n+2, etc)


function counter (n){
    return (
        () =>{
            return n+=1;
        }
    )

}

var value = counter(-2);
console.log(value());
console.log(value());
console.log(value());
