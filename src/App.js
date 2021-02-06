import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "./Navigation/Navigation.js";
import Chatbot from 'react-chatbot-kit'

import Register from "./Register/Register.js";
import Feed from "./Feed/feed.js"


function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Hello</h1>

      <Chatbot />


      <BrowserRouter>
        <Switch>
          <Route path= "/register" component = {Register} />
          <Route path= "/" />
        </Switch>
      </BrowserRouter>
      
      <Feed />

    </div>
  );
}

export default App;
