/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-21 00:47:44
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-05-21 13:52:04
 * @FilePath     : \prac7\routes\index.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;


router.get('/brew', function(req, res, next) {
    var drink = req.query.drink;
    if (drink == "tea") {
        res.send("A delicious cup of tea.");
    } else if (drink == "coffee") {
        res.sendStatus(418);
    } else {
        res.sendStatus(400);
    }
});


let first = false;
var message;
router.post('/pass-it-on', function(req, res, next) {
    if (req.body.message == null || req.body.message == "") {
        res.sendStatus(400);
    } else {
        if (first == false) {
            res.send("first");
            first = true;
            message = req.body.message;
        } else {
            res.send(message);
            message = req.body.message;
        }
    }
});



router.post('/combine', function(req, res, next) {
    message = '';
    for (var i = 0; i < req.body.lines.length; i++) {
        message += req.body.lines[i] + req.body.suffix + '\n';
    }
    res.send(message);
});


router.get('/cookie', function(req, res, next) {
    if (req.cookies.task3_1) {
        res.cookie('task3_1', Number(req.cookies.task3_1) + 1);
    } else {
        res.cookie('task3_1', '1');
    }

    res.send();
});