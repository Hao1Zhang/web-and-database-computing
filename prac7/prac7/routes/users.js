/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-21 00:47:44
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-05-21 13:34:07
 * @FilePath     : \prac7\routes\users.js
 */
const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

var post = []
router.post('/addpost', function(req, res, next) {
    if (req.is('application/json') === null || req.is('application/json') === false) {
        res.status(412).send();
    } else {
        next();
    }
    var title = req.body.title;
    var content = req.body.content;
    post.push({ "title": title, "content": content })
    res.send()
});

router.get('/getposts', function(req, res, next) {
    var content = [];
    for (var i = post.length - 1; i > -1; i--) {
        content.push(post[i]);
    }
    res.send(JSON.stringify(content));
});





// 2-3
router.use(function(req, res, next) {
    if (req.method === 'POST') {
        // do stuff

        if (req.is('application/json') === null || req.is('application/json') === false) {
            res.status(412).send();
        } else {
            next();
        }
    } else {
        next();
    }
});

router.use('/addpost', function(req, res, next) {
    if (req.method === 'POST') {
        // do stuff

        if (req.is('application/json') === null || req.is('application/json') === false) {
            res.status(412).send();
        } else {
            next();
        }
    } else {
        next();
    }
});


router.get('/cookie', function(req, res, next) {
    if (req.cookie.task3_1) {
        res.cookie('task3_1', Number(res.cookie.task3_1) + 1);

    } else {
        res.cookie('task3_1', 1);
    }
});