import React, { useEffect, useState, useParams } from "react";
// 
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";


function SavedBooks() {
  const [books, setBooks] = useState({})

  const { id } = useParams()
  useEffect(() => {
    API.getSavedBooks(books)
     .then(res => setBooks(res.data))
     .catch(err => console.log(err));
   }, []) 

// function deleteBook(id) {
//   API.deleteBook(id)
//     .then(res => API.getSavedBooks())
//     .catch(err => console.log(err));
// }
  

    return(
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books on My List { id }</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
    )
}

export default SavedBooks;