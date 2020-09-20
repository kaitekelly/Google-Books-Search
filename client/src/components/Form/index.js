import React from "react";
import "./style.css";
// import axios from "axios";
// // import { useState } from "react";
// import book from "../../pages/Books";
// import setBook from "../../pages/Books";
// import result from "../../pages/Books";
// import setResult from "../../pages/Books";
// const apiKey = process.env.REACT_APP_API_KEY;

// import apiKey from ".env";

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

export function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
    <div className="form-group mt-10">
        <input className="form-control" onChange={props.onChange} {...props} />
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
      </div>
    );
  }