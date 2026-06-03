const user ={
    username :"Suhas",
    price: 900,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
} // this mean current contact 

// user.welcomeMessage() // browser under global object is windows 
// console.log(this);
// function chai(){
//     let usernm="Suhas"
//     console.log(this);
    
// }
// chai()

// const chai=function(){
//  let username ="Suhas"
//  console.log(this.username);

// }

const chai= () =>{
 let username ="Suhas"
 console.log(this);

}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2  // explicet method call
// }
// const addtwo=(num1,num2)=> num1+num2;// implicet method call

// const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username:"Uttam"})

console.log(addtwo(45,78));
