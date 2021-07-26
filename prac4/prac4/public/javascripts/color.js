/*
 * @Author       : Hao Zhang
 * @Date         : 2021-04-06 22:30:24
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-04-06 22:44:38
 * @FilePath     : \prac4\public\javascripts\color.js
 */

function color() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var color = this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("color2").style.color = color;
            document.getElementById("color2").innerHTML = color;
        }
    };
    xhttp.open("GET", "/color.txt", true);
    xhttp.send();
}