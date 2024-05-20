// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// 1) toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".

// 2) notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".


function expect(val){
    return{
        Tobe: (val1)=>{
            if(val1===val){
                return true
            }
            else{
                throw Error ("Not Equal");
            }
        },
        NotToBe: (val2) =>{
            if(val2!==val){
                return true
            }else{
              throw Error("equal")
            }
            

        }
    }
}


const value = expect(10);

//test . Note run them one by one to see all the cases

// console.log(value.Tobe(100)); // error
// console.log(value.NotToBe(null)); true
// console.log(value.NotToBe(2)) //true