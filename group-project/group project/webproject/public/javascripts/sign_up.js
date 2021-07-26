/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-14 14:39:40
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-05-14 16:35:59
 * @FilePath     : \web_project\public\javascripts\sign_up.js
 */

function sign_up_as(evt, user) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(user).style.display = "block";
    evt.currentTarget.className += " active";
}