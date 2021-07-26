/*
 * @Author       : Hao Zhang
 * @Date         : 2021-03-26 11:08:51
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-03-26 17:35:03
 * @FilePath     : \web and database\prac3\task3.js
 */


function coutMouseOver(x) {
    i++;
    x.innerHTML = i;
}

function post() {

    var posts = document.getElementById("posts");
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.classList.add('post-time');
    div2.classList.add('post-content');
    var br = document.createElement('br');
    posts.appendChild(div1);
    posts.appendChild(br);
    posts.appendChild(div2);
    posts.appendChild(br);
    //for content
    var a = document.getElementById("myTextarea1").value;
    var contentlist = document.getElementById("posts").getElementsByClassName("post-content");
    if (contentlist && contentlist.length > 0) {
        contentlist[contentlist.length - 1].innerHTML = a;
    }
    //for time
    var Timelist = document.getElementById("posts").getElementsByClassName("post-time");
    if (Timelist && Timelist.length > 0) {
        Timelist[Timelist.length - 1].innerHTML = new Date();
    }


}

function postWithCss() {
    //this is for the radio and repeat functions
    //repeat
    var times = document.getElementsByName("quantity");
    // console.log(times[0].value);
    var colors = document.getElementsByName("color");
    var styles = document.getElementsByName("style");
    console.log(colors[0].value);
    for (let i = 0; i < times[0].value; i++) {
        post();
        //change figure
        var contentlist = document.getElementById("posts").getElementsByClassName("post-content");
        for (let j = 0; j < colors.length; j++) {
            if (colors[j].checked == true) {
                contentlist[contentlist.length - 1].style.color = colors[j].value;
            }
        }
        console.log(styles[0].value);
        if (styles[0].checked == true) {
            contentlist[contentlist.length - 1].style.fontWeight = styles[0].value;
        }
        if (styles[1].checked == true) {
            contentlist[contentlist.length - 1].style.fontStyle = styles[1].value;
        }

    }
}

function goToMenu() {
    var main = document.getElementById("main");
    main.style.display = "none";
    var menu = document.getElementById("menu");
    menu.style.display = "block";
}

function backToMain() {
    var main = document.getElementById("main");
    main.style.display = "block";
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

function put() {
    /*var text = document.getElementsByClassName("post-content")[0].innerHTML;
    document.getElementById("post").innerHTML = text;*/

    var d = new Date();
    var text = document.getElementsByTagName("textarea")[0].value;
    var num = document.getElementsByName("quantity")[0].value;

    for (var i = 0; i < num; i++) {

        var cont = document.createElement("div");
        var node = document.createTextNode(d);
        cont.appendChild(node);
        //para.className = "post-time";
        var element = document.getElementById("posts");
        element.appendChild(cont);

        var cont1 = document.createElement("div");
        var TNode1 = document.createTextNode(text);
        cont1.appendChild(TNode1);
        cont1.className = "post-content";
        element.appendChild(cont1);

        var col = document.getElementsByName("color");
        if (col[0].checked == true) {
            cont1.style.color = "blue";
        }
        if (col[1].checked == true) {
            cont1.style.color = "red";
        }

        var time = document.createElement('div');
        element.appendChild(time);
        time.innerText = new Date();
        time.style.color = "grey";
        time.style.fontWeight = "bold";



    }
}

function changeBackground() {
    var menu = document.getElementsByName("backgroundColor");
    document.body.style.backgroundColor = menu[0].value;
    console.log(menu[0].value);
}

function changeVisible(a) {
    var visibleNums = a.value;
    console.log(visibleNums);
    var Timelist = document.getElementById("posts").getElementsByClassName("post-time");
    var contentlist = document.getElementById("posts").getElementsByClassName("post-content");
    if (visibleNums <= Timelist.length) {
        for (let i = visibleNums - 1; i < Timelist.length; i++) {
            Timelist[i].style.display = "none";
            contentlist[i].style.display = "none";

        }
        for (let i = 0; i < visibleNums; i++) {
            Timelist[i].style.display = "block";
            contentlist[i].style.display = "block";

        }
    }
}