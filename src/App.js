import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "./Navigation/Navigation.js";

import Register from "./Register/Register.js";
import Feed from "./Feed/feed.js"


function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Hello</h1>
      <BrowserRouter><Switch><Route path= "/register" component = {Register}></Route>
      <Route path= "/"></Route> </Switch></BrowserRouter>
      <Feed />

    </div>
  );
}

export default App;
