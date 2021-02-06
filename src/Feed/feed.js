import React from "react";
import "./feed.css";
import PostMessage from "./postmessage.js"
import Post from "./post.js"

function Feed() {
	return (
		<div className="feed">
			<PostMessage />

			<Post />
			<Post />
			<Post />
			
		</div>
	);
}

export default Feed;