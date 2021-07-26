/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-13 11:24:08
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-06-30 16:49:28
 * @FilePath     : \exam\web_project\routes\users.js
 */
var express = require('express');
var router = express.Router();
let currentUser = {
    u_id: 0,
    user_name: '',
    name: '',
    email: '',
};
let search = 0;
let search_condition = {
    keyword : '',
    price : 'none',
    category : 'all',
    cover_type : 'all'
};
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/sign_in', function(req, res, next) {

    // console.log(req.body);
    req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT u_id,user_name,name,email FROM Users WHERE user_name= ? AND password_hash = SHA2(?,224);";
        connection.query(query, [
            req.body.user_name,
            req.body.psw
        ],function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            //   console.log(rows);
            if (rows.length > 0){
                // console.log(rows[0]);
                req.session.user = rows[0];
                currentUser = rows[0];
                res.json(rows[0]);
            }
            else {
                res.sendStatus(401);
            }
        });
    });
});

router.post('/sign_up', function(req, res, next) {
    if ('user_name' in req.body &&
        'email' in req.body &&
        'name' in req.body &&
        'psw' in req.body
    ){
    // console.log(req.body);
        req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO Users (user_name,name, email, password_hash) VALUES (?,?,?, SHA2(?,224));";
        connection.query(query, [req.body.user_name,
                req.body.email,
                req.body.name,
                req.body.psw
            ],
            function(err, rows, fields) {
                connection.release(); // release connection
                if (err) {
                    // console.log();
                    res.sendStatus(500);
                    return;
                }
                res.end();
            });

    });

    }
    else{
        res.sendStatus(402);
    }
});

router.post('/books', function(req, res, next) {
    var query = '';
    var order = '';
    // console.log(req.body);
        req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
            if (search == 0){
                query = "SELECT * FROM Books;";
                connection.query(query,function(err, rows, fields) {
                        connection.release(); // release connection
                        if (err) {
                            // console.log(err);
                            res.sendStatus(500);
                            return;
                        }

                        res.json(rows);
                });

            }
            else if (search == 1){//search by other conditions

                query = "SELECT * FROM Books";
                query = query + ' WHERE b_id != 0';


                if (search_condition.category =='study' ){
                    order = " AND category = 'study' ";
                    query = query + order;
                }
                else if (search_condition.category =='entertainment' ){
                    order = " AND category = 'entertainment' ";
                    query = query + order;
                }


                if (search_condition.cover_type =='hard' ){
                    order = " AND cover_type = 'hard' ";
                    query = query + order;
                }
                else if (search_condition.cover_type =='soft' ){
                    order = " AND cover_type = 'soft' ";
                    query = query + order;
                }


                if (search_condition.price =='low_to_high' ){
                    order = ' ORDER BY price';
                    query = query + order;
                }
                else if (search_condition.price =='high_to_low' ){
                    order = ' ORDER BY price DESC';
                    query = query + order;
                }
                query = query + ';';

                search = 0;
                search_condition = {
                    keyword : '',
                    price : 'none',
                    category : 'all',
                    cover_type : 'all'
                };
                connection.query(query,function(err, rows, fields) {
                        connection.release(); // release connection
                        if (err) {
                            // console.log(err);
                            res.sendStatus(500);
                            return;
                        }

                        res.json(rows);
                });
            }

            else if (search == 2){//search by book names

                query = "SELECT * FROM Books";
                query = query + ' WHERE name = "'+search_condition.keyword+'"';

                query = query + ';';
                search = 0;
                search_condition = {
                    keyword : '',
                    price : 'none',
                    category : 'all',
                    cover_type : 'all'
                };
                connection.query(query,function(err, rows, fields) {
                        connection.release(); // release connection
                        if (err) {
                            // console.log(err);
                            res.sendStatus(500);
                            return;
                        }

                        res.json(rows);
                });
            }
            else if (search == 3){//search by book names

                query = "SELECT * FROM Books";
                query = query + ' WHERE author = "'+search_condition.keyword+'"';

                query = query + ';';
                search = 0;
                search_condition = {
                    keyword : '',
                    price : 'none',
                    category : 'all',
                    cover_type : 'all'
                };
                connection.query(query,function(err, rows, fields) {
                        connection.release(); // release connection
                        if (err) {
                            // console.log(err);
                            res.sendStatus(500);
                            return;
                        }

                        res.json(rows);
                });
            }

    });
});


router.post('/order', function(req, res, next) {

    // console.log(currentUser);
    req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO Orders (user, book,date) VALUES (?, ?,NOW());";
        connection.query(query, [
            currentUser.u_id,
            req.body.id
        ],function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end();

        });
    });
});

router.post('/user_infor', function(req, res, next) {

    res.json(currentUser);

});


router.post('/change_user_setting', function(req, res, next) {
    if ('user_name' in req.body &&
        'name' in req.body &&
        'email' in req.body
    ){
        // console.log(currentUser);
        req.pool.getConnection(function(err, connection) {
            if (err) {
                res.sendStatus(500);
                return;
            }

            var query = `UPDATE Users
                        SET user_name = ?, name = ?, email = ?
                        WHERE u_id = ?;`;
            connection.query(query, [
                req.body.user_name,
                req.body.name,
                req.body.email,
                currentUser.u_id
            ],function(err, rows, fields) {
                connection.release(); // release connection
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                if (currentUser.u_id != 0){
                    currentUser.user_name = req.body.user_name;
                    currentUser.name = req.body.name;
                    currentUser.email = req.body.email;
                    res.end();
                }
                else {
                    res.sendStatus(402);
                }
            });
        });
    }
    else{
        res.sendStatus(401);
    }



});


router.post('/orders', function(req, res, next) {
    // console.log(req.body);
        req.pool.getConnection(function(err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
            if (search == 0){
                var query = `SELECT Books.name, Orders.date, Books.price  FROM  Users
                                INNER JOIN Orders
                                ON Users.u_id = Orders.user
                                INNER JOIN Books
                                ON Books.b_id = Orders.book
                                WHERE Users.u_id = ? ;`;
                connection.query(query,[currentUser.u_id],function(err, rows, fields) {
                        connection.release(); // release connection
                        if (err) {
                            // console.log(err);
                            res.sendStatus(500);
                            return;
                        }
                        // console.log(rows);
                        res.json(rows);
                });

            }

    });
});


router.post('/search_author', function(req, res, next) {
    // console.log(req.body);
    search =3;
    search_condition.keyword = req.body.key_word;
    res.end();

});

router.post('/search_book', function(req, res, next) {
    // console.log(req.body);
    search =2;
    search_condition.keyword = req.body.key_word;
    res.end();

});

router.post('/search_other', function(req, res, next) {
    // console.log(req.body);
    search =1;
    search_condition.cover_type = req.body.cover_type;
    search_condition.category = req.body.category;
    search_condition.price = req.body.price;
    res.end();

});


module.exports = router;