function books() {
    var xmlhttp = new XMLHttpRequest();
    var text = '';
    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var books = JSON.parse(this.responseText);
            // console.log(books);
            var space = document.getElementById("book_posts");
            for (var i = 0; i < books.length; i++) {
                var book = books[i];
                text = text + `<div id="book_post">
                                    <button onclick = "order(`+book.b_id+`)">Order</button>
                                    <div class="books">
                                        <div class="book_name">`+book.name+`</div>
                                        <div class="information">
                                            <div class="author">Author: `+book.author+`</div>
                                            <div class="cover_type">Cover type: `+book.cover_type+`</div>
                                            <div class="cover_type">Category: `+book.category+`</div>
                                        </div>
                                        <div class="price">$`+book.price+`</div>

                                    </div>
                                </div>`;
                //


            }
            space.innerHTML = text;

        }
    };

    // Open connection to server & send the post data using a POST request
    xmlhttp.open("POST", "/users/books", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}