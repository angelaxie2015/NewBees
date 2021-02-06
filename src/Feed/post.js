import React from "react";
import "./post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SmsIcon from '@material-ui/icons/Sms';

function Post( {profilePic, image, username, timestamp, message} ) {
	return (
		<div className="post">

			<div className="post-top">
				<Avatar src={profilePic}
						className="post-avatar" />

				<div className="post-topInfo">
					<h3>{username}</h3>
					<p>timestamp...</p>
				</div>
			</div>

			<div className="post-bottom">
				<p>{message}</p>
			</div>

			<div className="post-image">
				<img src={image} alt=""></img>
			</div>

			<div className='post-replies'>
				<div className="post-c">
					<ThumbUpIcon />
					<p>Like</p>
				</div>

				<div className="post-c">
					<SmsIcon />
					<p>Reply</p>
				</div>
			</div>
		</div>
	);
}

export default Post;