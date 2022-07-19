import { React, useState } from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from './NavBar';
import DogList from './DogList';
import DogDetails from './DogDetails';

import './App.css';

const API_URL = "http://localhost:5001/dogs";

/** App for managing a dogs list.
 *
 * State:
 * - dogs: possible array of [ { dog }, ... ]
 *
 * App -> { NavBar, Routes }
 */

function App() {
  const [dogs, setDogs] = useState(false);
  // console.log("DOGS", dogs);

  async function getDogs() {
    const allDogs = await axios({url: API_URL})
    setDogs(ds => allDogs.data);
  }

  if (!dogs) getDogs();

  return (
    <div className="App">
      <h1>Dog House!</h1>
      {dogs
        ? <BrowserRouter>
            <NavBar dogs={dogs} />
            <Routes>
              <Route element={<DogList dogs={dogs} />} path="/dogs" />
              <Route element={<DogDetails dogs={dogs}/>} path="/dogs/:name" />
              <Route element={<Navigate to="/dogs" />} path="*" />
            </Routes>
          </BrowserRouter>
        : "Loading Dogs..."
      }
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
