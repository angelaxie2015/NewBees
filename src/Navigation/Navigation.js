import React from "react";
import "./Navigation.css";

// import { Route, BrowserRouter, Link } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@material-ui/core';
import {Navbar, Nav} from 'react-bootstrap';
import Register from "../Register/Register";

function Navigation() {
	
	
	return (
		<div className="navigation">

			<AppBar position="static" className="navbar">
			  <Toolbar>

			  	<Navbar.Brand href="/">
			    	<img src="../../NewBeeLogo.png" alt="bee image" className="nav-img"></img>
			 	</Navbar.Brand>

			    <Nav.Link href="">
			    	<span className="nav-link" color="inherit">LogIn</span>
			    </Nav.Link>

			    <Nav.Link href="register">
			    	<span className="nav-link" color="inherit">Register</span>
			    </Nav.Link>

			    <Nav.Link href="feed">
			    	<span className="nav-link" color="inherit">Feeds</span>
			    </Nav.Link>


			    <Nav.Link href="register">
			    	<span className="nav-link" color="inherit">Register</span>
			    </Nav.Link>

			    <div className="user">
				    <Avatar />
				    <h4 className="nav-username">UserName</h4>
				</div>
			  </Toolbar>
			</AppBar>

		</div>
	);
}

export default Navigation;