/*
 * @Author       : Hao Zhang
 * @Date         : 2021-03-26 09:40:13
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-03-26 10:34:58
 * @FilePath     : \web and database\prac3\task1.js
 */

function getDateById(id) {
    var d = new Date();
    document.getElementById(id).innerHTML = d;
}

function test() {
    document.getElementById("current_time").innerHTML = "aa";
}