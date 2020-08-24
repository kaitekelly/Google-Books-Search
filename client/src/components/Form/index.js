import React from "react";
import { useState } from "react";
import axios from "axios";
require('dotenv').config();



const [book, setBook] = useState("");
const [result, setResult] = useState([]);



function handleChange(event) {
  const book = event.target.value;
  setBook(book);

}

function handleSubmit(event) {
  event.preventDefault();
  console.log(book);

  axios.get("GET https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
  .then(data => {
    console.log(data.data.items);
    setResult(data.data.items);
  })
}

export function Input(props) {
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group mt-10">
        <input className="form-control" onChange={handleChange} {...props} />
    </div>
    </form>

  )

}

export function TextArea(props) {
    return (
      <div className="form-group mt-10">
        <textarea className="form-control" rows="20" {...props} />
      </div>
    );
  }

  export function FormBtn(props) {
    return (
      <div>
      <button type="submit" {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        </a>
      ))}
      </div>
    );
  }