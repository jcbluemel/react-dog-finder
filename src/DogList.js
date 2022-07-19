import React from "react";
import { Link } from "react-router-dom";
// import "../public";

/** Display list of all dogs with links to each.
 *
 *  Props:
 *  - dogs: like [ { dog }, ... ]
 *
 *  Routes -> DogList -> Link(s)
 */

function DogList({ dogs }) {

  const img = `../public/{dog.name}.jpg`

  function showDog(dog) {
    return (
      <div key={dog.name} className="DogList-dog">
        <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
        <h6>{dog.age}</h6>
        <img src={img} alt="doggo"/>
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