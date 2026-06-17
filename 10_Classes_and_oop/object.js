function multipleyby5(num) {
    this.num=num
    return num*5
    
}
multipleyby5.power=8
console.log(multipleyby5(17));
console.log(multipleyby5.power);

console.log(multipleyby5.prototype);

function Createuser(username,score) {
    this.username=username
    this.score=score
}

Createuser.prototype.increment=function(){
   this.score++
}
Createuser.prototype.printme=function () {
    console.log(`score is ${this.score}`);
    
}
const newvalue=new Createuser("Suhas G",45)
const incrementvalue= new Createuser("Tea",250)

newvalue.printme()
/*
 Here' S what happens behind the scanes when the new keyword is used:
 A new object is crated: the new keyword initiates the creation of a new javascript object.

 A prototype is linked: the newly created object gets linked to the protype 
 property of the constructor function.  This means that it has access to properties and 
 method defined on the constructor's protype

 The constructor is called: The constructor fuction is called with the specified arguments
 and this is bound to the newly created object. If no explicit return value is specified 
 from the constructor. JavaScript assumes this the newly created object, to be the intended 
 return value.

 The new object is Returned : After the constructor fuction has been Called, if it doesn't 
 return a non-primitive value (object,aaray, fuction,etc.), 
 the newly created object is returned
 
 */