import React from "react";
import PostList from "./PostList";
import Post from "./Post";
import FriendList from "./FriendList";
import Friend from "./Friend";
import About from "./About"
import Face from "./Face"
import Photo from "./Photo"
import Name from "./Name"
import Hobbies from "./Hobbies"
import Bigbar from "./Bigbar"
import { Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return ( 
    <React.Fragment>
      <Bigbar />
      <Container>
        <Row>
          <Col>
            <h2>All about me</h2>
            <Face />
            <About />
          </Col>
          <Col className="col-6">
            <h2>Posts</h2>
            <Post />
          </Col>
          <Col>
            <h2>Friend List</h2>
            <FriendList />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;

// https://github.com/Hermanya/awesome-react-bootstrap-components