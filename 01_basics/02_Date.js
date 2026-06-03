let myDate= new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());//  current Date time print
// console.log(typeof(myDate));

// let mycurrentDate =new Date(2026,0,10,15,45,4)
// console.log(mycurrentDate.toDateString());
// let mycurrentDate = new Date("2026-05-24")
// console.log(mycurrentDate.toLocaleString());

// let mytimestamp = Date.now()
// console.log(mytimestamp);
 //console.log(mycurrentDate.getTime());

 console.log(Math.floor(Date.now()/1000));
myDate.toLocaleString('default',{
    day:"2-digit"
})

console.log(myDate);




