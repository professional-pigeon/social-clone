import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    
    <React.Fragment>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
    <button className="btn btn-primary">This is a button</button>
  </div>
</div>
      <h3></h3>
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  name: PropTypes.string
};

export default Friend;

