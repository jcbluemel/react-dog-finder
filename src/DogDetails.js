import React from "react";
import { useParams } from "react-router-dom";

/** Show individual dog details.
 *
 *  Props:
 *  - dogs: array of all dogs
 *
 * //FIXME: check hierarchy
 * { DogList, Route } -> DogDetails
 */

function DogDetails({ dogs }) {
  // console.log("DogDetails",dogs);

  function _getDog(){
    // console.log('name',name);
    return dogs.filter(dog => dog.src === name)[0];
  }

  const { name } = useParams();
  const dog = _getDog();

  return (
    <div>
      <header>DogDetails!</header>
      <p>{dog.name}</p>
      <p>{dog.age}</p>
      {dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
    </div>
  );
}

export default DogDetails;