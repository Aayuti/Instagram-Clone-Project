function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var regex = /^[a-zA-Z]{5,}[0-9]{1,}[@_]{1}/gi;

    var test = username.match(regex);
    var test1 = password.match(regex);

    if (username == " " || password == " "){
        alert("Username or Password field cannot be empty");
    }

    else if (test && test1) {
        alert("Validated");
    }

    else {
        alert("Username and Password should contain atleast 5 alphabets, atleast 1 numerical and 1 special character. The order should be alphabets, numerical and special character");
        return false;
    }


}