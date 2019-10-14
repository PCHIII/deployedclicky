import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
    
        <div className="col-3 girl-container p-2" onClick={() => props.onClick(props.id)}>
            <img src={props.image} className="girl shadow-lg" alt="Cowboy Cheerleader" />
        </div>
        
)

export default PictureCard;