import React from "react";
import "./feed.css";
import PostMessage from "./postmessage.js";
import Post from "./post.js";
import Chatbot from 'react-chatbot-kit';

import ActionProvider from '../ChatBot/actionprovider';
import MessageParser from "../ChatBot/messageparser";
import config from '../ChatBot/config';
import {Row, Col, Container, Button, Card} from 'react-bootstrap'

function Feed() {
	return (
		<div className="feed">

			<Row>
				<Col>
					<PostMessage />

					<Post 
						profilePic="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann.jpeg"
						message="For over 150 years Dadant and Sons has produced and sold the best beekeeping supplies & equipment available to beekeepers throughout the world. Whether you’re an experienced beekeeper or a new hobbyist, we can provide you with the proper equipment and information you need to be a successful beekeeper."
						timestamp="time is 10pm"
						username="angelaaaaa"
						image="https://i.ytimg.com/vi/4cv6KynQsz8/maxresdefault.jpg" />
					<Post 
						username="awuu"
						timestamp="time is 1am"
						message="I tried Beekeeping for the first time! Check out what I have so far! You guys definitely should try it out!"
						image="https://images.squarespace-cdn.com/content/v1/5c92689894d71a4929b9b623/1565494759696-LSOXAH3NDHCFP714X48X/ke17ZwdGBToddI8pDm48kMCwDOejMKGGtY83OE3u7wZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnFPV_q970C9tUKu7PiU_5-JkaKwPtJoAZg-4vauv30ZoQ/Dani+Beekeeping+1.jpeg"
					/>
					<Post />

				</Col>

				<Col>
					<div className="chatbot">
			          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
			        </div>
		        </Col>
			</Row>
		</div>
	);
}

export default Feed;