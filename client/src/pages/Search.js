import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";

function Search(props) {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  // useEffect(() => {
  //   API.getBook(id)
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBook(formObject.title)
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  }

  function saveBook(title, author, synopsis) {
    API.saveBook({
      title: title,
      author: author,
      synopsis: synopsis,
    })
      .then((res) => saveBook())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
              Submit Search
            </FormBtn>
          </form>
        </Col>
      </Row>
      {books.map((book) => (
        <>
          <Row>
            <Col size="md-12">
              <h1>
                {book.volumeInfo.title} by {book.volumeInfo.authors.toString()}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h1>Synopsis</h1>
                <p>{book.volumeInfo.description}</p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-2"></Col>
            <SaveBtn
              onClick={() =>
                saveBook(
                  book.volumeInfo.title,
                  book.volumeInfo.authors.toString(),
                  book.volumeInfo.description
                )
              }
            />
          </Row>
        </>
      ))}
    </Container>
  );
}

export default Search;
