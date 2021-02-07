import { InstantSearch, Hits, Highlight, SearchBox } from 'react-instantsearch-dom';

const Hit = ({hit}) => {
  <div className="hit">
    <div className="hitImage">
      <img src={hit.image}/>
    </div>
      <div className = "hitName">
        <Highlight attribute = "name" hit = {hit}/>
      </div>
  </div>
}

const Content = () => {
  <div className = "content">
  	<Hits hitComponent = {Hit} />
  </div>
}

class ActionProvider {

	search(m){
		console.log("I'm here in the search engine");
		<InstantSearch
		    appId="latency"
		    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
		    indexName="bestbuy"
		 >

		<header>
          <SearchBox translations = {{placeholder:'Search Box'}}/>
      </header>

		 <main>
		  <Content/>
		</main>


		</InstantSearch>
	}

  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  define(index){
	const definitions = [
    						"The third region of the body of a bee enclosing the honey stomach, true stomach, intestine, sting, and reproductive organs.", 
    						"An entire colony of bees that abandons the hive because of disease, wax moth, excessive heat or water, lack of resources, or other reasons.",
    						"The name of the disease caused by the tracheal mite (Acarapis woodi). See Tracheal mite.",
    						"a small swarm which may leave the hive after the first or primary swarm has departed. These afterswarms usually have less bees associated with them than the primary swarm.",
    						"a brood disease of honey bees caused by the spore-forming bacterium, Paenibacillus larvae. The spore stage of the bacterium can remain viable for many years, making is difficult to eliminate the disease",
    						"colonies, hives, and other equipment assembled in one location for beekeeping operations; also known as a bee yard.",
    						"the science and art of raising honey bees.",
    						"Genus and species of the Western honey bee originating in Europe and Africa and now located around the world.",
    						"A hive or box placed preferably in an elevated location used to attract and hopefully capture swarms.",
    						"a motorized blower used as one  method to remove  bees from honeycombs.  Typically frames are not  removed from supers prior to using the blower.",
    						"a fermented mixture of collected pollen and nectar or honey, deposited in the cells of a comb.  Pollen is the primary pollen source for  bees and is used especially by the nurse bees to produce royal jelly to feed the young larvae."



    					];


  	const message = this.createChatBotMessage(definitions[index], {
  		withAvatar: true,
  		delay:500,
  	});
  	this.updateChatbotState(message);
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
