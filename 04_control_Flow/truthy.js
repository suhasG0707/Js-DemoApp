const UserEmail="s@has.ai"
if (UserEmail) {
    console.log("Got User email");
    
}else{
    console.log("Dont have User email");
    
}
// falsy  value 
// (false,0,-0,BigInt 0n,"",null,undefined.Nan)

//truthy value
// "0",'false'," ",[],{},function(){}
const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log("objec Is empty");
    
}

//nullish coalescing operator (??)

let vall;
// vall=5??10;
// vall =null?? 15
// vall =undefined??
// vall=null??10??20
// console.log(vall);

//terniary operator
const iceteaprice=100
iceteaprice>=80? console.log("Less then 80"):console.log("MOrw then 80");
;
