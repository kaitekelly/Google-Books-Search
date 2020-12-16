import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import axios from "axios";
import "./style.css";
// require("dotenv").config();

import { Container, Row, Col } from "reactstrap";

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

  const searchGoogleBooks = async () => {
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          books +
          "&key=" +
          apiKey
      )
      .then((data) => {
        setResult(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(books + "book from handle submit button");
    searchGoogleBooks();
  }

  function handleBookSave(index) {
    console.log(index);
    console.log(result[index].id);
    API.saveBook({
      googleId: result[index].id,
      image: result[index].volumeInfo.imageLinks.thumbnail,
      title: result[index].volumeInfo.title,
      authors: result[index].volumeInfo.authors,
      description: result[index].volumeInfo.description,
      link: result[index].volumeInfo.previewLink,
    }).catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron className="fluid">
        <h1 className="search-header">Google Book Search</h1>
      </Jumbotron>
      <Container fluid className="search-container">
        <Row>
          <Col size="md-6">
            <Input
              onChange={handleChange}
              onSubmit={handleSubmit}
              name="title"
              placeholder="Enter title, author, or keywords (required)"
            />
            <FormBtn onClick={handleSubmit}>Search</FormBtn>
            {result.length ? (
              <List>
                {result.map((book, index) => {
                  console.log(JSON.stringify(book, null, 2));
                  return (
                    <ListItem key={book.id}>
                      <a href={"/books/" + book.id}>
                        <div className="book-title">
                          <strong>
                            {book.volumeInfo.title} by {book.volumeInfo.authors}
                          </strong>
                        </div>
                        <p>{book.volumeInfo.description}</p>
                      </a>
                      <a href={book.volumeInfo.previewLink}>
                        <img
                          src={
                            book.volumeInfo.imageLinks === undefined
                              ? ""
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={book.volumeInfo.title}
                        />
                      </a>
                      <button
                        onClick={() => handleBookSave(index)}
                        className="btn"
                      >
                        {" "}
                        Save Book to List
                      </button>
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
    </div>
  );
}
export default Books;
