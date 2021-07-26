/*
 * @Author       : Hao Zhang
 * @Date         : 2021-06-09 21:23:34
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-06-30 16:43:02
 * @FilePath     : \exam\web_project\public\javascripts\sign_in.js
 */
user = null;

function sign_in() {

    let this_user = {
        user_name: document.getElementById('user_name').value,
        psw: document.getElementById('psw').value
    };
    if (this_user.email != '' && this_user.pass != '') {
        // console.log(user.user);
        // console.log(user.pass);
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                user = JSON.parse(this.responseText);
                alert("Welcome " + user.user_name);
                window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Wrong  User Name or Password");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/sign_in", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(this_user));
    }

}

//the sign up validation functions is from the group project which is written 100% by myself
function ValidateEmail(input) {
    var email = document.getElementById('email-user');

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        alert("Valid email address!");

        email.focus();

        return true;

    } else {

        alert("Invalid email address!");

        email.focus();

        return false;

    }

}


function check_valid(user) {
    var valid = true;
    //check valid email
    var valid_email = true;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (user.email.match(validRegex)) {

        valid_email = true;

    } else {
        valid_email = false;
        valid = false;
    }
    if (valid_email == false) {
        alert("Email not valid!");
    }

    var valid_pass = true;

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (user.psw.match(passw)) {

        valid_pass = true;

    } else {
        valid_pass = false;
        valid = false;
    }
    if (valid_email == false) {
        alert("Please enter a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
    }

    return valid;
}

function sign_up() {
    let user = {
        user_name: document.getElementById('user_name').value,
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        psw: document.getElementById('psw').value,
    };

    var valid = check_valid(user);
    if (valid == true) {
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Sign up successfully!");
                window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status == 401) {
                alert("The email has already been used, try another one!");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/sign_up", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(user));
    }
}