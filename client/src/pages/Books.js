import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import axios from "axios";
require('dotenv').config();

 function Books() {
  //react access the api key in the .env
  // const apiKey = process.env.REACT_APP_API_KEY;
  
  // const [book, setBook] = useState("");
  // const [result, setResult] = useState([]);
  
  
  
  // function handleChange(event) {
  //   const book = event.target.value;
  //   setBook(book);
  
  // }
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(book);
  
  //   axios.get("GET https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
  //   .then(data => {
  //     console.log(data.data.items);
  //     setResult(data.data.items);
  //   })
  // }

  //old code starts
    // const [book, setBook] = useState("");
    // const [result, setResult] = useState([]);
    // const apiKey = process.env.REACT_APP_API_KEY;

    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // function loadBooks() {
    //     API.getBooks()
    //      .then(res => 
    //         setBook(res.data)
    //         )
    //      .catch(err => console.log(err));
    // };

    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Google Book Search</h1>
                </Jumbotron>
                <form>
                    <Input
                      onChange={() => {}}
                      name="title"
                      placeholder="Title (required)"
                    />
                    <Input
                      onChange={() => {}}
                      name="author"
                      placeholder="Author (required)"
                    />
                    <TextArea
                         onChange={() => {}}
                      name="synopsis"
                      placeholder="Synopsis (optional)"
                    />
                    <FormBtn>
                        Submit Book
                    </FormBtn>
                </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                  <h1>Books on My List</h1>
              </Jumbotron>
              {book.length ? (
                  <List>
                    {book.map(book => {
                        return (
                            <ListItem key={book._id}>
                          <a href={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
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
         </Row>
      </Container>
    );
}

export default Books;