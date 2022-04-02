import React,{useEffect,useState} from 'react'

import Headers from "./HomePage/Header";
import Home from "./component/Home/Home";
import PostDetails from "./component/PostDetails/ProductDetails";

import { BrowserRouter,Route, Redirect } from 'react-router-dom';
import {Switch} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const App=()=> {
  const history = useHistory();
  const dispatch =useDispatch();

  return (
  
      <div className="App">
        <BrowserRouter>
        <Headers />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/:id"  component={PostDetails} />
          </Switch>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
