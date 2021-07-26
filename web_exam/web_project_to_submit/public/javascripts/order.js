function order(b_id){
    let book = {
        id: b_id,
    };
    if (book.id != '' ) {
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("order seccuessful");
                // window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Fail,please log in first!");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/order", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(book));
    }
}