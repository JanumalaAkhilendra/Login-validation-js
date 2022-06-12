// function to validate to users
var username1 = document.getElementById('username').values
var password1 = document.getElementById('password').values
function validate(){
    console.log('clicked');
    if(password1 ===''){
        alert('Login Sucessfully');
         return false;
    }else{
        alert('Login Failed');
    }
}