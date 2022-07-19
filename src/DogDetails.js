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
  console.log("DogDetails",dogs);
  //TODO: grab name of dog from params, filter dogs to get single dog
  //  display the dog
  const { name } = useParams();

  const dog = _getDog();
  console.log('dog',dog);



  // Make an _function that is only called from within DogDetails
  // The function Grabs the dog object with the same name key

  /**Function _getDog() takes no parameters.
   * Returns the first object of dog details from the dogs array,
   * where the src key matches the URL parameter.
   * ex: /dogs/whiskey -> {name:..., src: whiskey}
   */
  function _getDog(){
    console.log('name',name);
    return dogs.filter(dog => dog.src === name)[0];
  }

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