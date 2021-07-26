/*
 * @Author       : Hao Zhang
 * @Date         : 2021-04-06 20:23:23
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-04-06 22:06:57
 * @FilePath     : \prac4\public\javascripts\page.js
 */

function loadtime() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var times = "This page was last viewed " + this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("last_viewed").innerHTML = times;
        }
    };
    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
}