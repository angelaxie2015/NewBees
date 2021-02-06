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
			    <img src="../../bee.jpg" alt="bee image" className="nav-img"></img>
			    <Typography variant="h6" className="nav_title">NewBees</Typography>
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