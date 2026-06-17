let myname="SUhas     "
let fathername="Uttam     "
// console.log(myname.truelength());

let myHero=["thor","Spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function (params) {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.SUhas= function(){
    console.log(`Suhas is present in all objects`);
    
}
Array.prototype.hesuhas=function(){
    console.log('hello suhas');
    
}
// heropower.SUhas()
// myHero.SUhas()
// myHero.hesuhas()
// heropower.hesuhas()
const User={
    username:"SUHAS",
    EMAIL:"SUHASGOogle.com"
}
const teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTme:true,
    __proto__:TeachingSupport
}
teacher.__proto__=User

// modern Syntax
Object.setPrototypeOf(TeachingSupport,teacher)
let Anotherusername="SuhasCode   "

String.prototype.trueLength=function(){
    console.log(`${this}`);    
    console.log(` true length is: ${this.trim().length}`);
    
}
Anotherusername.trueLength()
"Suhas".trueLength()