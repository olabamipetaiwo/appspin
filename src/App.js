import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login.jsx';
import Spinner from './components/Spinner/spinner.jsx'
import './App.scss';


const App = () => {

    return (
        <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/spinner" component={Spinner} />
      </Switch>
   </BrowserRouter>
    );
}

export default App;