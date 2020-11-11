var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require("dateformat");

// router.get('/',(req,res,next)=>{
//     res.redirect('rsv');
// });

var firebaseConfig = {
    apiKey: "AIzaSyDLxr0UL3qBEkeW1vdWNI3VuLV1ZVmN5UY",
    authDomain: "memo20201103.firebaseapp.com",
    databaseURL: "https://memo20201103.firebaseio.com",
    projectId: "memo20201103",
    storageBucket: "memo20201103.appspot.com",
    messagingSenderId: "337093264374",
    appId: "1:337093264374:web:1d020ae383278d6c623dd7",
    measurementId: "G-K41VDW7QG3"
  }; firebase.initializeApp(firebaseConfig);
  


//이하 CRUD 기능 구현



router.get('/',(req, res)=>{
    firebase.database().ref('room').orderByKey().once('value', function(snapshot){
        var rows1 = [];
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            rows1.push(childData.roomno);
        });
        res.render('rsv_main.ejs', {rows1:rows1});
    });
});

//강의실 대여 사용자
//Read
router.get('/room',(req,res)=>{
    firebase.database().ref('room/'+req.query.roomno).once('value', function(snapshot){
        var child = snapshot.val();
        res.render('rsv_info.ejs',{row:child});
    });
    
});

//Create
router.get('/form',(req, res)=> {
    res.render('rsv_form.ejs');
});

//관리자
//Create
router.get('/room_manager',(req,res)=>{
    res.render('./manager/rsv_info_input.ejs');
});



module.exports = router;