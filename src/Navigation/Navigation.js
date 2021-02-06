import React from "react";
import "./Navigation.css";

// import { Route, BrowserRouter, Link } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@material-ui/core';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import Register from "../Register/Register";

function Navigation() {
	
	return (
		<div className="navigation">

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
							<p>Username: </p>
							<input className="nav-box" type="text" name="username" />
							password:
							<input className="nav-box" type="text" name="password" />
							<input className="nav-submit" type="submit" value="Submit" />
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