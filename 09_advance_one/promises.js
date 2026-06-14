const promisesone=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptogragh,network
     setTimeout(function() {
        console.log('async task is complete');
        resolve()
     }, 1000);
})

promisesone.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
        
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
  resolve({username:'Suhas', email:'Suhas@gmail.com'})
    },1000)
})


promisethree.then(function(user){
console.log(user);

})

const promisesGfour= new Promise(function(resolve,reject){
 setTimeout(() => {
    let error=true
    if (!error) {
        resolve({username:"SUHS G",Password:"784512"})
    }
    else{
        reject('Error:Something went wrong')
    }
    
 }, 1000);
})

const UserName= promisesGfour.then((user)=>{
    console.log(user);

    return user.username
    
}).then((username)=>{
 console.log(username);
 
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(() => {
    let error=false
    if (!error) {
        resolve({username:"Uttam G",Password:"85245"})
    }
    else{
        reject('Error:Something went wrong')
    }
    
 }, 1000);
});

async function cansumepromisefive(){
    try {
        const reponse=  await promiseFive
        console.log(reponse);
 
    } catch (error) {
        console.log(error);
        
    }
  
}
cansumepromisefive()


// async function getAllusers() {
//   try {
       
//   const response= await fetch('https://jsonplaceholder.typicode.com/users')
//   console.log(response);
  
// const data=  await response.json()

// console.log(data);
//   } catch (error) {
//     console.log(error);
    
//   }

// }

//getAllusers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>
{
    return  response.json()

}).then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))