const session = require('express-session');
//require module, pass it the session module
const MongoDBStore = require('connect-mongodb-session')(session);


const express = require('express');

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



let onlineUser;
let auth = session.loggedin




app.use(express.json());

app.get("/", function(req,res,next) {
    res.send("HELLO")
})

app.get("/register", function(req,res,next) {
    res.send("register")
})


app.post("/register", cors(), function (req, res, next) {

    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST');

    res.header('Access-Control-Allow-Headers', 'Content-Type');







    //get the JSON from the xhttp
    let user = req.body;



    userModel.findOne({ username: { $regex: user.username } }, function (err, result) {
        //check if somebody has the same username
        if (err) {
            console.log(err);
        }



        if (result == null) {
            //if there is no username with the same name
            //create a new user
            //make the session.loggedin true
            //and redirect

            let newUser = new userModel();
            newUser.username = user.username;
            newUser.password = user.password;
            newUser.friends = [];
            
            req.session.loggedin = true;
            status = true;
            onlineUser = user.username;
            req.session.user = user.username;
            
         

            newUser.save(function (error, user) {
                //save the newuser and get back the id
                
                if (error) {
                    console.log(error);
                }
                console.log(user);

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

app.get("/loggedIn", cors(), function (req, res, next) {
    
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST');

    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //this function is to check if the information is correct when somebody logs in 
    let user = req.body;
    
    if(req.session.loggedin == true){
        console.log("yes");
        
        res.send({username: req.session.user, auth: true});
    }else{
        console.log("no");
 
        res.send({username: req.session.user, auth: false});
    }


    

});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {





    // Start server once Mongo is initialized
    app.listen(8080);
    console.log("Listening on port 8080");
});