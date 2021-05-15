import React from 'react'
import './App.css';
import Nav_one from './event/Nav_one'
import Home from './event/Home'
import Wedding from './event/Wedding'
import {  Route, Switch } from 'react-router-dom';
import Drink from './event/Drink';
import Eat from './event/Eat'
import Flowers from './event/Flowers'
import Invitations from './event/Invitations'
import Account from './event/Account';
import Reception from './event/Reception';
function App() {
  return (
        <div className="App">
      <Nav_one/>
      
<Switch>
<Route exact path="/"><Home/></Route>
<Route path="/Wedding"><Wedding/></Route>
<Route path="/Reception"><Reception/></Route>
<Route path="/Drink"><Drink/></Route>
<Route path="/Eat"><Eat/></Route>
<Route path="/Flowers"><Flowers/></Route>
<Route path="/Invitations"><Invitations/></Route>
<Route path="/Account"><Account/></Route>
</Switch>
        
        
        
        
    </div>
    
   
  );
}

export default App;
