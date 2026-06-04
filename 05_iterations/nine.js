const mynum=[1,2,3]
 
// const mytotal=mynum.reduce(function(acc,currentval){
//     console.log(`acc: ${acc} and curval: ${currentval}`);
    
// return acc+currentval
// },3)


const totalvalu=mynum.reduce((acc,curr)=> acc+curr,0)
//console.log( totalvalu);


const Coursecart= [{
              itemName:'Javascript',
              price:2999
             },
             {
              itemName:'paython',
              price:3999
             },
             {
              itemName:'data science',
              price:12999
             },
] 
const totalprice=
Coursecart.reduce((acc,item)=>acc +item.price,0)

console.log(totalprice);
