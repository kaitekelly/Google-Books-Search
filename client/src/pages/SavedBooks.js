import React from "react";
// // import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// // import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";


function SavedBooks() {
    return(
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books on My List</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
    )
}

export default SavedBooks;