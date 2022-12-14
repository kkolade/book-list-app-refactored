// VARIABLES
// Select element from the dom
const bookShelf = document.querySelector('.book-shelf');
const addBookForm = document.querySelector('.add-book-form');

// The Book Class
const Book = class {
  constructor(_title, _author, _bookId) {
    this.title = _title;
    this.author = _author;
    this.bookId = _bookId;
  }
};
export { bookShelf, addBookForm, Book };