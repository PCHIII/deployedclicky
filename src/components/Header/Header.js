import React from "react";
import "./Header.css";

const Header = props => (
    // <header>
      <div className="nav-bar navbar-expand-lg text-center p-3 bg-primary text-white">
        <div className="col-4 header-items">
          <button onClick={props.resetGame} className="reload-link btn btn-dark btn-lg">
           START GAME
        </button>
        </div>
        <div className="col-4 header-items">
          <span>Click a Cheerleader to Score!!</span>
        </div>
        <div className="col-4 header-items">
          <span className="scores"> Your Score:  {props.currentScore}  <span className='divide pl-3 pr-3'>| </span> Top Score:  {props.topScore}
          </span>
        </div>
      </div>
    // </header>
);

export default Header;