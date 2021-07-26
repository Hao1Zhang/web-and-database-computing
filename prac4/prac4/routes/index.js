/*
 * @Author       : Hao Zhang
 * @Date         : 2021-04-06 17:24:20
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-04-06 23:11:26
 * @FilePath     : \prac4\routes\index.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});




var time = " ";
router.get('/last.txt', function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');

    res.send(time);
    time = new Date().toString();
});





var col = 0;
var colmap = ["red", "yellow", "green", "blue"];
var col1 = 0;
router.get('/color.txt', function(req, res, next) {
    res.send(colmap[col1 % 4]);
    col1++;
});

router.get('/color.html', function(req, res, next) {
    //res.render('index', { title: 'Express' });


    res.send(`<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <title>color</title>
       </head>
       <body>
       <h1 style="color:${colmap[col%4]}">${colmap[col%4]}</h1>
       </body>
       </html>`);

    col++;
});

var times = "";
var count = 0;
router.get('/log.html', function(req, res, next) {
    time = new Date().toString();
    if (count == 0) {
        times = "<li>" + time + "</li>";
    } else {
        times = times + "<li>" + time + "</li>";
    }

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>color</title>
    </head>
    <body>
    <ul>${times}</ul>
    </body>
    </html>`);

    count++;


});

var visited = false;
router.get('/first.html', function(req, res, next) {
    //res.render('index', { title: 'Express' });

    if (visited == false) {
        visited = true;
        res.send(`<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <title>color</title>
       </head>
       <body>
       <h1 >"Welcome"</h1>
       <a href="/main.html">"main"</a>
       </body>
       </html>`);

    } else {
        res.redirect("/main.html");
    }

    col++;
});

router.get('/main.html', function(req, res, next) {
    //res.render('index', { title: 'Express' });

    if (visited == false) {
        res.redirect("/first.html");


    } else {
        res.send(`<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <title>color</title>
       </head>
       <body>
       <h1 >"My main site"</h1>
       <p></p>
       </body>
       </html>`);
    }

    col++;
});

// router.get('/last.txt', function(req, res, next) {

//     time = new Date().toString();
//     var times = "This page was last viewed" + time;
//     var last_viewed = document.getElementById("last_viewed");
//     last_viewed.innerHTML = times;
// });

router.get('/contact.ajax', function(req, res, next) {
    res.send(`<a href='a1788848@adelaide.edu.au'>a1788848@adelaide.edu.au</a>`);
});
router.get('/search.ajax', function(req, res, next) {
    res.send(`<input type = "text">
            <button>send</button>`);
});

router.get('/about.ajax', function(req, res, next) {
    res.send(`<p>not amazing at all</p>`);
});


a = 0;
router.get('/accept', function(req, res, next) {
    res.status(200).end();
    a = 1;
});

router.get('/content.ajax', function(req, res, next) {
    if (a == 1) {
        res.send(`<p>not amazing at all</p>
        <p>not amazing at all</p>`);
    } else {
        res.status(403).end();
    }
});

module.exports = router;