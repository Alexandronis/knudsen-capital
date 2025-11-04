import React from "react";

function InvCard(props) {
  
  return (
    <div className="inv-card">
      <div className="first-line">
        <img className="inv-image" src={props.imgSrc} />
        <div className="inv-title">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="second-line">
        <div className="desc">
          <p>{props.description}</p>
        </div>
        <div className="logo-set">
          {props.features.map((option) => (
            <img className="image_containar" src={option} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvCard;
