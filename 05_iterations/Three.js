//for of
// const arr=[45,46,47,48,49]
// for (const vall of arr) {
//     console.log(vall);
    
// }

// const greetings="Hello Suhas!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`);      
// }


//Map is hold key value pairs and no duplication only unique value 
const map = new Map()
map.set('In',"INDIA")
map.set('USA',"United state AMerica")
 
// console.log(map);
for (const [key,value] of map) {  // Array D-Stracture
//  console.log(key, ':-',value);
    
}

const myobject={
    geme1:'NFS',
     game2:'spiderman'
}

for (const [key,value] of myobject) { //TypeError: myobject is not iterable
     console.log(key, ':-',value);
}

