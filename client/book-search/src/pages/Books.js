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
        </Row>

      </Container>
    )
}