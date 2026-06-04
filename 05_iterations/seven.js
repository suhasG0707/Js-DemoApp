const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNum= mynumbers.map((num)=>num+10)
//const newNum= mynumbers.map((num)=>{return num+10})


// chaining 
const newnums=mynumbers
.map((num)=>num*10)
.map((num)=> num+1)
.filter((num)=> num >=40)

 console.log(newnums);

// const NewData = mynumbers.forEach((key)=>{
//     console.log(key+15);    
//     return key+15
// })

// console.log(NewData);

