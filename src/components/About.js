import React from "react";
import Hobbies from './Hobbies'

function About(){
  return (
    <React.Fragment>
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">About ME!</h5>
        <p className="card-text"><Hobbies /></p>
      </div>
    </div>
    </React.Fragment>
  );
}

export default About;

// Prop the name into the about
