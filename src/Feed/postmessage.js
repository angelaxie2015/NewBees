import React from 'react'
import "./postmessage.css"
import { Avatar } from '@material-ui/core';


function PostMessage(){
	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className="postMessage">

			<div className="postMessage-top">
				<Avatar />

				<form>
					<input className="postMessage-input" placeholder={"What should bee posted?"} />
					<input placeholder="image URL" />
					<button onClick={handleSubmit} type="submit">Hidden submit</button>
				</form>

			</div>

			<div className="postMessage-bottom">

			</div>
		</div>
	);
}

export default PostMessage;