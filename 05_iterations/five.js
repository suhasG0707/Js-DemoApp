
const coding=["js","cpp","Csharp","java"]
// coding.forEach(function(item){
//  console.log(item);
 
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

const Mycoding=[
    {
        languageName:"Javascript",
        languageFilename :"js"

     } ,
     {
        languageName:"C#",
        languageFilename :"cs"

     }, 
     {
        languageName:"python",
        languageFilename :"py"

     } 
]

Mycoding.forEach((item)=>{
    console.log(item.languageName);
    
})