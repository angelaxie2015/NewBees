import { Route, BrowserRouter, Switch, Router, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from "./Navigation/Navigation.js";
import Register from "./Register/Register.js";
import Home from "./Home/home.js";
import Feed from "./Feed/feed.js";

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
      </BrowserRouter>


    
  );
}

export default App;
