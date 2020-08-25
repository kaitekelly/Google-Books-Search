import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";
require('dotenv').config();

 function Books() {
  // react access the api key in the .env
  const apiKey = process.env.REACT_APP_API_KEY;
  
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  
  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
  
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
    })
  }
    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Google Book Search</h1>
                </Jumbotron>
                <form>
                    <Input
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      name="title"
                      placeholder="Title (required)"
                    />
                    <FormBtn>
                        Submit Book
                    </FormBtn>
                </form>
                              {result.length ? (
                  <List>
                    {result.map(book => {
                      console.log(JSON.stringify(book, null, 2))
                        return (
                            <ListItem key={book._id}>
                          <a href={"/books/" + book._id}>
                            <strong>
                              {book.volumeInfo.title} by {book.volumeInfo.authors}
                            </strong>
                          </a>
                          <DeleteBtn onClick={() => {}} />
                      </ListItem>
                        );
                    })}
                    </List>
              ) : (
                  <h3> No Results to Display</h3>
              )}

            </Col>
            {/* <Col size="md-6 sm-12">
              <Jumbotron>
                  <h1>Books on My List</h1>
              </Jumbotron>
            </Col> */}
         </Row>
      </Container>
    );
}

export default Books;