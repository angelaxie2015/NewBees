import React, { useState } from 'react'
import "./postmessage.css"
import { Avatar } from '@material-ui/core';


function PostMessage(){
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setInput("");
		
	}

	return (
		<div className="postMessage">

			<div className="postMessage-top">
				<Avatar />

				<form>
					<input 
						value={input} 
						onChange={ (e) => setInput(e.target.value)}
						className="postMessage-input" 
						placeholder={"What should bee posted?"} />
					<input 
						value={imageUrl}
						onChange={ (e) => setImageUrl(e.target.value)}
						placeholder="image URL" />
					<button onClick={handleSubmit} type="submit">Hidden submit</button>
				</form>
			</div>
		</div>
	);
}

export default PostMessage;