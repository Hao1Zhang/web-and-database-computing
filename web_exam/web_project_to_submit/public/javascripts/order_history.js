function Orders() {
    var xmlhttp = new XMLHttpRequest();
    var text = '';
    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var Orders = JSON.parse(this.responseText);
            // console.log(Orders);
            var space = document.getElementById("order_historys");
            for (var i = 0; i < Orders.length; i++) {
                var order = Orders[i];
                var day = new Date(order.date);
                var year = day.getFullYear();
                var mes = day.getMonth()+1;
                var dia = day.getDate();
                var fecha =dia+"-"+mes+"-"+year;
                text = text + `<div id="order_history">
                                    <div class="books">
                                        <div class="book_name">`+order.name+`</div>
                                        <div class="price">`+order.price+`</div>
                                        <div class="date">Date: `+fecha+`</div>
                                    </div>

                                </div>`;
                //


            }
            space.innerHTML = text;

        }
    };

    // Open connection to server & send the post data using a POST request
    xmlhttp.open("POST", "/users/orders", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}