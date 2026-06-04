// const coding=["js","cpp","Csharp","java"]
// const value= coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(value);


 const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=
// myNums.filter((num)=> num>4 )
// console.log(newnums);

// myNums.filter((num)=>{
//   return  num>4
// })
// console.log(newnums);


// const NewNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         NewNums.push(num)
//     }
// })

// console.log(NewNums);


const Books=[{title :'book one',genre:'history',publish:1886,edition:2010},
             {title :'book two',genre:'math',publish:1995,edition:2002},
             {title :'book three',genre:'science',publish:2005,edition:2014},
             {title :'book four',genre:'bio',publish:2015,edition:2023},
             {title :'book five',genre:'history',publish:1998,edition:2009}]


             //const fillterNM=Books.filter((bk)=>bk.genre==='history')

              const fillterNM=Books.filter((bk)=>{
                return bk.publish>=1994 && bk.genre==='history'
            })

             console.log(fillterNM);
             