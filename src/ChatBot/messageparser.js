class MessageParser {
  
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  
  }


  parse(message) {
    console.log(message);
    this.actionProvider.search(message);

    const terms = [
    				"abdomen", 
    				"absconding swarm",
    				"acarine disease",
    				"afterswarm",
    				"american foulbrood",
    				"apiary",
    				"apiculture",
    				"apis mellifera",
    				"bait hive",
    				"bee blower",
    				"bee bread"
    				];

    const lowerCaseMessage = message.toLowerCase()   

    if(terms.includes(lowerCaseMessage)){
    	this.actionProvider.define(terms.indexOf(lowerCaseMessage));

    } 
    else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") ) {
      this.actionProvider.greet()
    }

    
  }
}

export default MessageParser;