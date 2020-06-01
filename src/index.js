import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom" ;
import QuestionsPage from './QuestionsPage' ;
import WelcomePage from './WelcomePage';
import Correct from './correct' ;
import False from './false' ;
import TimeUp from './timeup' ;


const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WelcomePage} exact />
        <Route path="/questions/:id" component={QuestionsPage} exact />
        <Route path="/correct/:id" component={Correct} exact />
        <Route path="/false/:id" component={False} exact />
        <Route path="/timeisup/:id" component={TimeUp} exact />
      </Switch>
    </BrowserRouter>
 
 ) ;
  
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
