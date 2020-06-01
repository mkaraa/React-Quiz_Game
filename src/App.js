import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './WelcomePage';
import ReactDOM from "react-dom" ;
import {BrowserRouter, Route, Link, Switch} from "react-router-dom" ;
import QuestionsPage from './QuestionsPage' ;

function App() {
  return (
    <div className="App">
      <WelcomePage></WelcomePage>
    </div>
  );
  }

export default App;
