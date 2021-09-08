import React from "react";
import Name from './Name'
import Photo from './Photo'

function Face(){
  return (
    <React.Fragment>
      <hr/>
      <Photo />
      <Name />
    </React.Fragment>
  );
}

export default Face;