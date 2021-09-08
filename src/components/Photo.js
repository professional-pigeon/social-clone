import React from "react";
import todd from './todd.jpg'

function Photo(){
  return (
    <React.Fragment>
      <h3>A photo will go here</h3>
      <img src={todd} alt="Todd Rundren" />
    </React.Fragment>
  );
}

export default Photo;