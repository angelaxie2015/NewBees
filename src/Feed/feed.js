import React from "react";
import "./feed.css";
import PostMessage from "./postmessage.js"
import Post from "./post.js"

function Feed() {
	return (
		<div className="feed">
			<PostMessage />

			<Post 
				profilePic="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann.jpeg"
				message="testing testing"
				timestamp="timeeeee is 10pm"
				username="angelaaaaa"
				image="../../NewBeeLogo.png"
			/>
			<Post />
			<Post />
			
		</div>
	);
}

export default Feed;