import React from "react";
import { Link } from "react-router-dom";
// import "../public";

// Dog photos import
// Import the photos As the same variable name === src attribute of the dog obj
// import whiskey from '/whiskey.jpg';

// const DOGPHOTOS = {whiskey}

/** Display list of all dogs with links to each.
 *
 *  Props:
 *  - dogs: like [ { dog }, ... ]
 *
 *  Routes -> DogList -> Link(s)
 */

function DogList({ dogs }) {

  function showDog(dog) {
    return (
      <div key={dog.name} className="DogList-dog">
        <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
        {/* <h6>{dog.age}</h6> */}
        <img src={`/${dog.src}.jpg`} alt="doggo"/>
      </div>
    )
  }

  return (
    <div className="DogList">
      {dogs.map(d => showDog(d))}
    </div>
  );
}

export default DogList;