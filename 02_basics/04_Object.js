 //const tinderUser= new onject()// singleton object
 const tinderUser={} // non singlton object

 //console.log(tinderUser);
 tinderUser.id="707Suhas"
 tinderUser.name="Suhas"
 tinderUser.isLoggedIn=false
//  console.log(tinderUser);
 
const regularUser={
    email:"Suhas@gmail.com",
    FullName :{
        userfullname:{
             firstname:"Suhas",
             lastnamr:"goilkar"
        }
    }
}
// console.log(regularUser.FullName?.userfullname); // user for Question mark to check value is null or not equal
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)//assign(target: {}, source1: { 1: string; 2: string; }
const obj3={...obj1,...obj2,...obj4}//spread   functio using 
// console.log(obj3);
// const users =[{
//     id:154,
//     email :"suhas@google.com"
// }]


// console.log(tinderUser);
// console.log(Object.values(tinderUser));// find values form arry
// console.log(Object.keys(tinderUser));// find key form arry
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// check this key prensent in Array or not show boolen value

const Course ={
    coursename:"dot net core",
    price :"4500",
    courseInstractor : "vijay"
}
const {courseInstractor: instractor}=Course // use extra value from Array and store in variable
console.log(instractor);// it all call object distractor
