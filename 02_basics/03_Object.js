
// singleton

// object literals
const mysym= Symbol("Key1")
const jsUser ={
    UserName:"Suhas",
    "Full Name":"Suhas Goilkar",
    [mysym]:"UserKey1",
    age:30,
    location:"Mumbai",
    email:"Suhas@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Tuesaday","Saturday"]
}

// console.log(jsUser.UserName);
// console.log(jsUser["UserName"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mysym]);
jsUser.email="Suhas@microsoft.in"

//Object.freeze(jsUser)// Freeze changes can not change any value

jsUser.email="Suhas@gmaoil.com"

// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello  Suhas User");
    
}
jsUser.greetingTwo=function(){
    console.log(`Hello  Suhas User your Email : ${this.email}`);
    
}
 console.log(jsUser);
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
