import React from "react";
import { Link } from "react-router-dom";

/** Display list of all dogs with links to each.
 *
 *  Props:
 *  - dogs: like [ { dog }, ... ]
 *
 * //FIXME: check hierarchy
 *  Routes -> DogList -> Link(s)
 */

function DogList({ dogs }) {
  return (
    //TODO: * listOfDogs.map(dog => <html> <things containing info={dog}> <LINK to="/dogname"> </html>)
    <header>DogList!</header>
  );
}

export default DogList;