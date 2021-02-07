import React, {useState, Component}   from "react";

import axios from 'axios';
import "../Register/Register.js"
import './Register.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { withRouter } from "react-router-dom";


function Register(props) {
	const [state , setState] = useState({
		email : "",
		username : "",
        password : "",
        confirmPassword: "",
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
		console.log(state.password);
		console.log(state.confirmPassword)
        if(state.password === state.confirmPassword) {
			console.log("here2")
            sendDetailsToServer()
			
			 
        } else {
			console.log("here")
            alert('Passwords do not match');   
        }
	}
	const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {

            
            axios.post('http://localhost:8080/register', 
                {
                email: state.email,
                username: state.username,
                password : state.password,
                confirmpassword : state.confirmPassword
            } )
                .then(function (response) {
                    if(response.status === 200){

                        alert(JSON.stringify(response.data));
                        //THEN REDIRECT TO HOME WITH LOGGED IN
                        
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
		<div className="register">
            
            <h1>Register</h1>

			<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
					   placeholder="Enter email"
					   value={state.email}
                       onChange={handleChange}
                />

                
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
				<div className="form-group text-left">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="username" 
                       className="form-control" 
                       id="username" 
					   placeholder="Username"
					   value={state.username}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
						placeholder="Password"
						value={state.password}
                       onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
						placeholder="Confirm Password"
						value={state.confirmpassword}
                       onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
					className="btn btn-primary"
					onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
			<div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                
                <span>Already have an account? Log in above!</span>
                
                
            </div>
            
        </div>
		</div>
	);
}

export default Register;