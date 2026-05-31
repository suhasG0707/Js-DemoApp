function myname(){
    console.log("S");
    console.log("U");
    console.log("H");
    console.log("A");
    console.log("S");
    
}
//myname // is fuction reference
//myname()// () use for excution use for react 

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
// console.log("Result :",Result);
// console.log("Suhas");

function loginUserMessage(username='Suhu'){
    if(!username){
     console.log("please enter UserName");
     return
     
    }
    return`${username} Just logged in`
}
// console.log(loginUserMessage());// value not pass then show message undefined just logged in

// function calculatecartprice(...num1)// dot call rest oprater
// {
//  return num1
// }

// console.log(calculatecartprice(200,300,400));

function calculatecartprice(val1,val2,...num1)// dot call rest oprate.
{
 return num1
}

// console.log(calculatecartprice(200,300,400,500,450));// Result showing [400,500,450] its mean val1,val2 assign first and second value

const users={
    username: "SUhas",
    Price : 4500
}

function handleobject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.Price}`);
    
}
handleobject(users)

const muNewArray=[200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(muNewArray));
