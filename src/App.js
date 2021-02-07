import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from "./Navigation/Navigation.js";
import Register from "./Register/Register.js";
import Home from "./Home/home.js";
import Feed from "./Feed/feed.js";

import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ChatBot/actionprovider';
import MessageParser from "./ChatBot/messageparser";
import config from './ChatBot/config';


function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Switch>          
          <Route path= "/feed" component = {Feed} />
          <Route path= "/register" component = {Register} />
          <Route exact path='/' component={Home}/>
          <Route path= "/"> 
            <Redirect to="/" />
           </Route>
        </Switch>

        <div className="chatbot">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      </BrowserRouter>


    
  );
}

export default App;
