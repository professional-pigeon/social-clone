import React from "react";
import Friend from "./Friend";

const mainFriendList = [
  {
    name: 'Barbara'
  },
  {
    name: 'Charles'
  },
  {
    name: 'Sam'
  },
  {
    name: 'Frankie'
  }
];

function FriendList(){
  return (
    <React.Fragment>
      <hr/>
      {mainFriendList.map((friend, index) =>
        <Friend name={friend.name}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default FriendList;
