
import "./Navigation.css";
import React, {useState, Component}   from "react";

import axios from 'axios';

// import { Route, BrowserRouter, Link } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@material-ui/core';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import Register from "../Register/Register";

function Navigation() {

	const checkIfLoggedIn = () => {
        

            
            axios.get('http://localhost:8080/loggedIn' )
                .then(function (response) {
                    if(response.status === 200){
						console.log(JSON.stringify(response.data));

						if(JSON.stringify(response.data.auth) === true){
							//toggle user logged in 
							console.log("e");
							console.log(JSON.stringify(response.data.username))
							
						}
						
						else{
							console.log(JSON.stringify(response.data))
						}

                       
                        
                    } else{
                        alert("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        
        
    }

	const [state , setState] = useState({
		username : "",
        password : "",
        successMessage: null
	})
	const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
	}
	
	const handleSubmitClick = (e) => {
		e.preventDefault();
		sendDetailsToServer()
			
			 
        
	}

	const sendDetailsToServer = () => {
        if(state.username.length && state.password.length) {

            
            axios.post('http://localhost:8080/check', 
                {
                
                username: state.username,
                password : state.password
                
            } )
                .then(function (response) {
                    if(response.status === 200){

						if(JSON.stringify(response.data) == "wrong"){
							alert("Wrong password")
						}
						if(JSON.stringify(response.data) == "none"){
							alert("User does not exist")
						}
						else{
							alert("Logged in!");
							checkIfLoggedIn();
							//login
						}

                       
                        
                    } else{
                        alert("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            alert('Please enter valid username and password')    
        }
        
    }
	
	return (
		<div className="navigation" onLoad ={checkIfLoggedIn}>

			<Navbar className="navbar">
			    <Navbar.Brand href="/" className="nav-img">
			    	<img src="../../NewBeeLogo.png" alt="bee image" className="nav-img"></img>
			 	</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link href="register">Register</Nav.Link>
			      <Nav.Link href="feed">Browse</Nav.Link>
			    </Nav>

			    <div className="nav-right-hand">
				    <form className="nav-form">
						<label className="nav-input">
							
							<input type="username"
								className="form-control"
								id="username"
								placeholder="Username"
								value={state.username}
								onChange={handleChange}
							/>
							
							<input type="password"
								className="form-control"
								id="password"
								placeholder="Password"
								value={state.password}
								onChange={handleChange}
							/>
							<input className="nav-submit" type="submit" value="Submit" onClick={handleSubmitClick} />
						</label>
					</form>
				</div>

				{/* Depending on log in, toggle in between login ask and username display 

				<div className="nav-right-hand">
					<div className="user">
					    <Avatar />
					    <h4 className="nav-username">UserName</h4>
					</div>
				</div>

				*/}
			</Navbar>

		</div>
	);
}

export default Navigation;