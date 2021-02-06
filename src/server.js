const session = require('express-session');
//require module, pass it the session module
//const MongoDBStore = require('connect-mongodb-session')(session);


const express = require('express');
const router = express.Router();


const fs = require("fs");
const { Server } = require('http');
//const Schema = mongoose.Schema;

let app = express();

app.use(session({ secret: 'some secret here' }));












app.use(express.json());

app.get("/", function(req,res,next) {
    res.send("HELLO")
})

app.get("/register", function(req,res,next) {
    res.send("register")
})


app.post("/register", function (req, res, next) {
    console.log("HELLO");
    res.setHeader("BYE");






    // //get the JSON from the xhttp
    // let user = req.body;

    // userModel.findOne({ username: { $regex: user.username } }, function (err, result) {
    //     //check if somebody has the same username
    //     if (err) {
    //         console.log(err);
    //     }


    //     if (result == null) {
    //         //if there is no username with the same name
    //         //create a new user
    //         //make the session.loggedin true
    //         //and redirect
    //         let newUser = new userModel();
    //         newUser.username = user.username;
    //         newUser.password = user.password;
    //         newUser.friends = [];
            
    //         req.session.loggedin = true;
    //         status = true;
    //         onlineUser = user.username;
    //         req.session.user = user.username;
            
    //         // Get the count of all users
    //         for(let max = 0; max< 10; max++) {
            
                    
    //                 // Get a random entry
    //                 var random = Math.floor(Math.random() * 1278)

    //                 // Again query all users but only fetch one offset by our random #


    //                 cardsModel.findOne().skip(random).exec(
    //                     function (err, result) {
    //                         console.log(max)
    //                         // Tada! random user
    //                         newUser.cards.push(result);
    //                     })

                
    //         }


    //         newUser.save(function (error, user) {
    //             //save the newuser and get back the id
    //             console.log("logged on now is " +req.session.user)
    //             if (error) {
    //                 console.log(error);
    //             }
    //             console.log(user);
    //             //send the user id
    //             res.send(user.id);
    //         })
    //     }
    //     else {
    //         //there is somebody with the same username
    //         res.send("okay");
    //     }
    // })



});

app.listen(8080, function (err) {
    if (err) {
      throw err
    }
  
    console.log('Server started at 8080')
  })