function search_author(){
    var word = {
        key_word : document.getElementById("search").value

    };
    if (word.key_word != '' ) {
        // console.log(user.user);
        // console.log(user.pass);
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Here is the result!");
                location.reload();
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Error");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/search_author", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(word));
    }
}

function search_book(){
    var word = {
        key_word : document.getElementById("search").value

    };
    if (word.key_word != '' ) {
        // console.log(user.user);
        // console.log(user.pass);
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Here is the result!");
                location.reload();
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Error");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/search_book", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(word));
    }
}
function search_other(){
    var word = {
        cover_type : document.getElementById("cover").value,
        category : document.getElementById("category").value,
        price : document.getElementById("price").value

    };

        // console.log(user.user);
        // console.log(user.pass);
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Here is the result!");
                location.reload();
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Error");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/search_other", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(word));

}