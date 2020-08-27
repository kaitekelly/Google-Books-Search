import axios from "axios";

export default {
    // Gets all books from Google API 
  getBooks: function() {
      return axios.get("/api/books");
  },
  // Gets all books from mongodb
  getSavedBooks: function() {
      return axios.get("/api/books/");
  },
    // Deletes the book with the given id
  deleteBook: function(id) {
      return axios.delete("/api/books" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData)
  }
};