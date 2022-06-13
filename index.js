// function to validate to users

function validate() {
    var username1 = document.getElementById('username').value
    var password1 = document.getElementById('password').value
    // console.log(username1);
    // console.log(password1);
    console.log('clicked');
    if (username1 == 'admin' && password1 == 'user') {
        alert('Login Sucessfully');
        return false;
    } else {
        alert('Login Failed');
    }
}
