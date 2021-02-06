import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from './botAvatar'

const botName = "BeeBot";

const config = {
	botName: botName,
	lang: "no",

	customComponents: {
		botAvatar: (props) => <BotAvatar {...props} />
	},

	customStyles: {
		botMessageBox: {
	      backgroundColor: "#376B7E",
	    },
	    chatButton: {
	      backgroundColor: "#5ccc9d",
	    },
	},

  initialMessages: [
  	createChatBotMessage(`Welcome to NewBees!`),
  	createChatBotMessage(`Here you can learn all the nuances of beekeeping!`, 
  		{
	  		withAvatar: true,
	  		delay: 500
	  	}),
  	createChatBotMessage(`My name is ${botName}. I'm here to help you answer your questions!`,
	  	{
	  		delay: 500,
	  		withAvatar: true,
	  	}
  	)
  	
  ]

}

export default config