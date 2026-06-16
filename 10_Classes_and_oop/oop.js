const user={
    username:'Suhas',
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        //console.log('got User Details from Database');
        //console.log(`userName ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
//console.log(this);

//console.log(user.getUserDetails());

// const promiseOne =new promise()
// const date=new Date()


function userN(username,logincount,isloggedIn) {
    this.username=username;
    this.loginCount=logincount;
    this.isloggedIn=isloggedIn

    this.grreting=function () {
        console.log(`Welcome ${this.username}`);
        
    }
    return this

}

const userone= new userN("Suhas G",10,true)
const usertwo= new userN("Suhas uttam G",65,true)
console.log(userone.constructor);
// console.log(usertwo);
