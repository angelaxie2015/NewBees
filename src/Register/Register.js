import React, {useState}  from "react";

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
	
	const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
	}
	const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/');
    }
    const handleSubmitClick = (e) => {
		e.preventDefault();
		console.log(state.password);
		console.log(state.confirmPassword)
        if(state.password === state.confirmPassword) {
			console.log("here2")
            sendDetailsToServer()
			console.log("here")
            alert('Passwords do not match');
			 
        } else {
			console.log("here")
            alert('Passwords do not match');   
        }
	}
	const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            //props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post('/register')
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
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
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
		</div>
	);
}

export default Register;