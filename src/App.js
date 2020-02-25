import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Formpage from './DashboardComponent/Formpage'
// import './App.css';
import Home from './DashboardComponent/Home'
import CampaignTable from './DashboardComponent/CampaignTable';
import MessageTemplateTable from './DashboardComponent/MessageTemplateTable';
import Login from './DashboardComponent/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
