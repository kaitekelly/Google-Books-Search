import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";
require("dotenv").config();

function Books() {
  // react access the api key in the .env
  const apiKey = process.env.REACT_APP_API_KEY;

  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);

  //handle change to search google books axios call/
  function handleChange(event) {
    const book = event.target.value;
    setBooks(book);
  }

  
  // api call submit button
  function handleSubmit(event) {
    event.preventDefault();
    console.log(books);

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          books +
          "&key=" +
          apiKey
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

function handleBookSave(index) {
  console.log(index)
  console.log(result[index].id)
  // const book = books.findById(book => book.id === id )
  API.saveBook({
    googleId: result[index].id,
    image: result[index].volumeInfo.imageLinks.thumbnail,
    title: result[index].volumeInfo.title,
    authors: result[index].volumeInfo.authors,
    description: result[index].volumeInfo.description,
    link: result[index].volumeInfo.previewLink})
    // .then(res => getBooks())
    // .then(res => console.log(result))
    .catch(err => console.log(err))
}
  // ***************************************/
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Google Book Search</h1>
          </Jumbotron>
            <Input
              onChange={handleChange}
              onSubmit={handleSubmit}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              // onClick={handleChange}
              onClick={handleSubmit}
            >Submit Book</FormBtn>
          {result.length ? (
            <List>
              {result.map((book, index) => {
                console.log(JSON.stringify(book, null, 2));
                return (
                  <ListItem key={book.id}>
                    <a href={"/books/" + book.id}>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong>
                      <p>
                        {book.volumeInfo.description}
                      </p>
                      </a>
                      <a href={book.volumeInfo.previewLink}>
                      <img src={
      book.volumeInfo.imageLinks === undefined
        ? ""
        : `${book.volumeInfo.imageLinks.thumbnail}`
  } alt={book.volumeInfo.title}/>
                      </a>
                    <button onClick={ () => handleBookSave(index)}> Save Book to List</button>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3> No Results to Display</h3>
          )}
        </Col>
  }
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
