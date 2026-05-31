//  var c=300 //  this dieclartion call global scope declare 
 
 //{}// is scope Call 
 let a=300
 if(true) { // write code under block is call block scope

   let a=10
   const b=20
  //  console.log('INNER: ',a);
   
    // c=30
 }
  // console.log(a);
 
//nested scope
function one(){
  const username='Suhas'
  function two(){
    const website="youtube"
    console.log(username);
    
  }
  // console.log(website);
  two()
  
}
// one()

if(true){
  const usernamenew="Suhas G"
  if(usernamenew==="Suhas G")
  {
    const websiten=" youtube"
    console.log(usernamenew+websiten)
  }
  // console.log(websiten);
  
}

// console.log(usernamenew);

 //**************************************************************/
 console.log( addone(5))
 function addone(num){
  return num+1
 }



 const addtwo=function(num){
  return num+2
 }
 console.log(addtwo(5));
  