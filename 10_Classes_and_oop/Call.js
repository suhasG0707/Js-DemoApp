function SetUsername(username) {
    this.username=username
    console.log(username);
    
}
 function createuser(username,email,password) {
    SetUsername.call(this,username)
    this.email=email
    this.password=password
    
 }

 const Channel=new createuser("Suhas","Suhasgoogle.com","555")
 console.log(Channel);
 