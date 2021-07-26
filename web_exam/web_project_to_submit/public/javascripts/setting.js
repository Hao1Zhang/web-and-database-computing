
function update_user_infor(this_user) {
    var user_id = document.getElementById("u_id");
    var user_name = document.getElementById("user_name");
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    user_id.innerHTML = this_user.u_id;
    user_name.placeholder = this_user.user_name;
    name.placeholder = this_user.name;
    email.placeholder = this_user.email;
}

function load_user_infor() {
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update the page on success
            user = JSON.parse(this.responseText);
            update_user_infor(user);

            // }
        }
    };

    // Open connection to server & send the post data using a POST request
    // We will cover POST requests in more detail in week 8
    xmlhttp.open("POST", "/users/user_infor", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();

}


function save_user_setting() {
    let this_user = {
        user_name : document.getElementById("user_name").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value
    };
    var xmlhttp = new XMLHttpRequest();
    // alert(this_user.name);
    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                alert("setting saved");
                load_user_infor();

        }
        else if (this.readyState == 4 && this.status == 401) {
            alert("Please complete settings!");
        }
        else if (this.readyState == 4 && this.status > 401) {
            alert("Please login first!");
        }
    };

    // Open connection to server & send the post data using a POST request
    xmlhttp.open("POST", "/users/change_user_setting", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(this_user));
}