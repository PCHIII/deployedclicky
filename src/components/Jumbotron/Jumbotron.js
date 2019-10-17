import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron text-white bg-dark d-flex col-12">
        <div className="container col-3">
        <span class="fa fa-star fa-lg blue  pr-4"></span>
        <span class="fa fa-star fa-lg pr-4"></span>
        <span class="fa fa-star fa-lg blue  pr-4"></span>
        <span class="fa fa-star fa-lg pr-4"></span>
        <span class="fa fa-star fa-lg blue  pr-4"></span>
        </div>
        <span>Click on a Cowgirl to Score!  Don't hit on the same Girl twice! (12 Points Wins!)</span>
        <div className="container col-3">
        <span class="fa fa-star fa-lg blue pl-4"></span>
        <span class="fa fa-star fa-lg pl-4"></span>
        <span class="fa fa-star fa-lg blue pl-4"></span>
        <span class="fa fa-star fa-lg pl-4"></span>
        <span class="fa fa-star fa-lg blue pl-4"></span>
       </div>
    </div>
)
export default Jumbotron;