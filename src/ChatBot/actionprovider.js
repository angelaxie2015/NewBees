class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet(){
  	const firstmessage = this.createChatBotMessage("Hello!", {
  		withAvatar: true,
  		delay:500,
  	});
  	this.updateChatbotState(firstmessage);
  	const message = this.createChatBotMessage("What can I help you with?", {
  		withAvatar: true,
  		delay:500,
  	});
  	this.updateChatbotState(message);
  }

  updateChatbotState(message){
  	this.setState( prevState => ({
  		...prevState, messages: [...prevState.messages, message]
  	}))
  }
}

export default ActionProvider;
