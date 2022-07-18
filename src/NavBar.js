import React from "react";
import { Link } from "react-router-dom";

/** Component NavBar for listing the homepage and all possible dogs.
 *
 *  Props:
 *  - dogs: like [ { dog }, ... ]
 *
 *  App -> NavBar -> Link(s)
 */

function NavBar({ dogs }) {
  console.log("NavBar", dogs);
  return (
    <nav>
    {/* TODO: Remove NavBar Header*/}
    <header>NavBar!</header>
      <Link to="/dogs">
          All Dogs!
      </Link>
      {dogs.map(
        dog => <Link to={`/${dog.src}`}> {`${dog.name}`} </Link>)
      }
    </nav>
  );
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