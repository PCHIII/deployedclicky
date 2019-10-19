import React from "react";
import "./Header.css";


const Header = props => (
    
      <div className="navbar navbar-expand-lg p-3 bg-primary text-white">
        <div className="col-2 header-items">
          <button type="button" onClick={props.resetGame} className="reload-link btn btn-dark btn-lg">
           START GAME
        </button>
        </div>
        <audio src="./assets/Dixie_Outlandish.mp3" controls>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
        <div className="col-4 header-items text-center">
          <h1>The Cowboy Clicky Game</h1>
        </div>
        <div className=" header-items nav-item ml-auto mr-2">
          <span className="scores"> Your Score: <span className="num"> {props.currentScore} </span> <span className='divide pl-3 pr-3'>| </span> Top Score: <span className="num"> {props.topScore}</span>
          </span>
        </div>
      </div>
    
);

export default Header;