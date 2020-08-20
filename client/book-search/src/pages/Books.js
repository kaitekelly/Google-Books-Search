import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
         .then(res => 
            setBooks(res.data)
            )
         .catch(err => console.log(err));
    };

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
                    <FormBtn
                      disabled={!(formObject.author && formObject.title)}
                      onClick={() => {}}
                    >
                        Submit Book
                    </FormBtn>
                </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                  <h1>Books on My List</h1>
              </Jumbotron>
              {books.length ? (
                  <List>
                    {books.map(book => {
                        return (
                            <ListItem key={books._id}>
                          <a href={"/books/" + books._id}>
                            <strong>
                              {books.title} by {books.author}
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