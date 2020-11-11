var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require("dateformat");

router.get('/',function(req, res, next) {
    res.redirect('boardList')
});

//var config = {
//     apiKey : "",
//     authDomain : "",
//     databaseURL : "",
//     projectId : "",
//     storageBucket : "",
//     messagingSenderId : ""
// };
//firebase.initializeApp(config);

// router.get('/boardList', funciton(req, res, next) {
//     firebase. database().ref('board').order
// })


module.exports = router;