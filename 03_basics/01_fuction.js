function myname(){
    console.log("S");
    console.log("U");
    console.log("H");
    console.log("A");
    console.log("S");
    
}
//myname // is fuction reference
myname()// () use for excution use for react 

// function Addtwonumber(number1,number2)// crate function that time parameter create number1, number2
// {
//     console.log(number1+number2);
    
// }
// Addtwonumber(40,12) // Argument pass to 40,12

function Addtwonumber(number1,number2)
{
    let result=number1+number2
    return result
    
}
const Result= Addtwonumber(40,12) 
console.log("Result :",Result);
