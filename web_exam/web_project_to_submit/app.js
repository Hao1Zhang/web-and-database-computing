/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-13 11:24:08
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-06-30 15:13:32
 * @FilePath     : \exam\web_project\app.js
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');
// var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var dbConnectionPool = mysql.createPool({ host: 'localhost', database: 'web_exam' });
app.use(function(req, res, next) {
    req.pool = dbConnectionPool;
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'a string of your choice',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users', express.static(path.join(__dirname, 'private')));

module.exports = app;