import React from "react";
import "./Header.css";

const Header = props => (
    
      <div className="navbar navbar-expand-lg p-3 bg-primary text-white">
        <div className="col-4 header-items nabbar-brand">
          <button onClick={props.resetGame} className="reload-link btn btn-dark btn-lg">
           START GAME
        </button>
        </div>
        <div className="col-4 header-items text-center">
          <span>Click a Cheerleader to Score!!</span>
        </div>
        <div className=" header-items nav-item ml-auto">
          <span className="scores"> Your Score:  {props.currentScore}  <span className='divide pl-3 pr-3'>| </span> Top Score:  {props.topScore}
          </span>
        </div>
      </div>
    
);

export default Header;