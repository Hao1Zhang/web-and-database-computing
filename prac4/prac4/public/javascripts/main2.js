/*
 * @Author       : Hao Zhang
 * @Date         : 2021-04-06 23:12:18
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-04-06 23:24:46
 * @FilePath     : \prac4\public\javascripts\main2.js
 */
function get_response() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("a").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/content.ajax", true);
    xhttp.send();

}

function accept() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            get_response();
        }
    };
    xhttp.open("GET", "/accept", true);
    xhttp.send();

}