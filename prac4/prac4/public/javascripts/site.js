/*
 * @Author       : Hao Zhang
 * @Date         : 2021-04-06 22:57:53
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-04-06 23:00:56
 * @FilePath     : \prac4\public\javascripts\site.js
 */
function contact() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var times = "This page was last viewed " + this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("a").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/contact.ajax", true);
    xhttp.send();
}

function search() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var times = "This page was last viewed " + this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("a").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/search.ajax", true);
    xhttp.send();
}

function about() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var times = "This page was last viewed " + this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("a").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/about.ajax", true);
    xhttp.send();
}