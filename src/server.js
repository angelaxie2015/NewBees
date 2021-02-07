const session = require('express-session');
//require module, pass it the session module
const MongoDBStore = require('connect-mongodb-session')(session);


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const fs = require("fs");

const Schema = mongoose.Schema;

let app = express();
let cors = require('cors')

app.use(session({ secret: 'some secret here' }));

//Create the new mongo collection, using the database we have been
// using already, and the collection sessiondata
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/admin',
    collection: 'sessiondata'
});

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true });



let db = mongoose.connection;

//Schema for my users
let userSchema = Schema({
    username: String,
    password: String
   
});



let userModel = mongoose.model('Users', userSchema);


app.options('*', cors())








app.use(express.json());

app.get("/", function(req,res,next) {
    res.send("HELLO")
})

app.get("/register", function(req,res,next) {
    res.send("register")
})


app.post("/register", cors(), function (req, res, next) {
    console.log("HELLO");
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST');

    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //res.setHeader("BYE");






    //get the JSON from the xhttp
    let user = req.body;
    console.log(user.username);

    userModel.findOne({ username: { $regex: user.username } }, function (err, result) {
        //check if somebody has the same username
        if (err) {
            console.log(err);
        }
        console.log("hey");


        if (result == null) {
            //if there is no username with the same name
            //create a new user
            //make the session.loggedin true
            //and redirect
            console.log("none")
            let newUser = new userModel();
            newUser.username = user.username;
            newUser.password = user.password;
            newUser.friends = [];
            
            req.session.loggedin = true;
            status = true;
            onlineUser = user.username;
            req.session.user = user.username;
            
            // Get the count of all users
            for(let max = 0; max< 10; max++) {
            
                    
                    // Get a random entry
                    var random = Math.floor(Math.random() * 1278)

                    // Again query all users but only fetch one offset by our random #


                    // cardsModel.findOne().skip(random).exec(
                    //     function (err, result) {
                    //         console.log(max)
                    //         // Tada! random user
                    //         newUser.cards.push(result);
                    //     })

                
            }


            newUser.save(function (error, user) {
                //save the newuser and get back the id
                console.log("logged on now is " +req.session.user)
                if (error) {
                    console.log(error);
                }
                console.log(user);
                //send the user id
                //res.send(user.id);
            })
        }
        else {
            //there is somebody with the same username
            res.send("Already username/email registered!");
        }
    })



});

app.post("/check", cors(), function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST');

    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //this function is to check if the information is correct when somebody logs in 
    let user = req.body;


    userModel.findOne({ username: { $regex: user.username } }, function (err, result) {
        //find out who is logged in

        if (err) {
            console.log(err);
        }

        if (result == null) {
            //if there is nobody with the same information that means there is no username with that name
            res.setHeader('Content-Type', 'text/html');
            res.send("none")
        }
        else {
            //so now we found it 

            if (result.password == user.password) {
                //we check if the password is correct
                //and set the session.loggedin to true
                req.session.loggedin = true;
                status = true;
                onlineUser = user.username;
                req.session.user = user.username;

                res.send(result._id);
            } else {

                //the password is wrong so request for the right one
                res.setHeader('Content-Type', 'text/html');
                res.send("wrong");
            }



            
        }
    })

});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {





    // Start server once Mongo is initialized
    app.listen(8080);
    console.log("Listening on port 8080");
});