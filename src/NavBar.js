import React from "react";
import { Link } from "react-router-dom";

/** Component NavBar for listing the homepage and all possible dogs.
 *
 * Props:
 * -listOfDogs: like [{dogDetails},...]
 *
 * App -> NavBar -> Link(s)
 */
function NavBar({listOfDogs}){
  return (
    //TODO: NavBar -><link to="/dogs"> + listOfDogs.map(dog => link to="/dog.name")
    <header>NavBar!</header>
  )
}


// Clair's Template Space
/**
 *     <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/eat">
        Eat
      </Link>
      <Link to="/drink">
        Drink
      </Link>
    </nav>
 */

export default NavBar;