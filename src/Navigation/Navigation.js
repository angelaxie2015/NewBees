import React from "react";
import "./Navigation.css";

import { Route, BrowserRouter } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@material-ui/core';
import Register from "../Register/Register";

function Navigation() {
	
	
	return (
		<div className="navigation">

			<AppBar position="static" className="navbar">
			  <Toolbar>
			    <img src="../../NewBeeLogo.png" alt="bee image" className="nav-img"></img>
			 
			    <Button color="inherit">Login</Button>
				<Button color="inherit" onClick={Register} >Register</Button>

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