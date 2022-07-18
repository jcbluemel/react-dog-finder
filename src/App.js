import {React, useState} from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from './NavBar';
import DogList from './DogList';
import DogDetails from './DogDetails';

import './App.css';


/** App for managing a dogs list.
 *
 * State:
 * - dogs: possible array of [ { dog }, ... ]
 *
 * App -> { NavBar, Routes }
 * TODO: Potentially update breadcrumbs
 */
function App() {

  // TODO: Define State as an empty array


  // TODO: CRRAZY JOEL INSPIRED FUNCTION CALL IN RETURN!?!?!
  // if the state of the array is empty {
      // Make an axios Call
      // Update The State with Axios Call
  // }

  return (
    <div className="App">
      {/* TODO: */}
      <h1>Good luck!</h1>
    </div>
  );
}

export default App;


// Clair's Thinking Space

/**
 * App
 * -State: [List of Dogs] emprty to start
 * -Props: None
 * -Axios Call
 * -TODO:Import Navigate
 *
 * TODO: Update the breadcrumb
 * App -> {NavBar | Routes -> (DogList | DogDetails) }
 *
 *
 * <BrowserRouter>
 * <NavBar>
 * <Routes>
 *    <Route element= { <DogList />} path="/dogs" />
 *    <Route element= { <DogDetails />} path="/dogs/:name" />
 *    <Route element= { <Navigate to="/dogs"/>} path="*" />
 *
 * Routes -> {DogList | DogDetails}
 *
 * _____________________________________________________________________________
 *
 * <NavBar>
 *
 * <NavBar> : State: None, Props: List of Dogs
 * NavBar -><link to="/dogs"> + ListOfDogs.map(dog => link to="/dog.name")
 *
 *
 * _____________________________________________________________________________
 *
 * <DogsList>
 * <DogsList> : State: None, Props: List of Dogs
 * listOfDogs.map(dog => <html> <things containing info={dog}> <LINK to="/dogname"> </html>)
 *
 *
 * _____________________________________________________________________________
 *
 * <DogDetails> : State: None, Props: single dog
 * <p>Dog Name
 * <p>Dog Details
 * <img>
 * <Link to="/dog.name"><img> </link>
 *
 */
