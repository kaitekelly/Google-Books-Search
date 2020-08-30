import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Container } from "../components/Grid";
// import { DeleteBtn } from "../components/Button/Btn";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
// import { Input, FormBtn } from "../components/Form";
import { Col } from 'react-bootstrap';

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);

  // const { id } = useParams()
  useEffect(() => {
    loadBooks();
  }, []);

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => API.getSavedBooks())
  //     .catch(err => console.log(err));
  // }

  function loadBooks() {
    API.getBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Col>
          <h1>Books Saved on My List</h1>
          </Col>
        </Container>
      </Jumbotron>
      <br></br>
      <br></br>
      <Container fluid id="resultsdiv">
        <h2>Saved Books</h2>
        {savedBooks.length ? (
          <List>
            {savedBooks.map((savedBook) => (
              
              <ListItem key={savedBook._id}>

              <a href={savedBook.link}>
                <img
                  src={
                    savedBook.image === undefined ? "" : `${savedBook.image}`
                  }
                  alt={savedBook.title}
                />
                </a>
                <strong>
                  {savedBook.title} by {savedBook.authors}
                </strong>
                <p className="book-description">{savedBook.description}</p>
                
                <br></br>
                <DeleteBtn onClick={() => deleteBook(savedBook._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h2>No Books to Display</h2>
        )}
      </Container>
    </div>
  );
}

export default SavedBooks;
