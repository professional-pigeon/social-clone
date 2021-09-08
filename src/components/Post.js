import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p><em>{props.date}</em></p>
      <p>{props.body}</p>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string
};

export default Post;