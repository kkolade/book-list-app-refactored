import {views} from './modules/view.js'

// VARIABLES

// Select element from the dom
const bookShelf = document.querySelector('.book-shelf');
const addBookForm = document.querySelector('.add-book-form');

// EVENT LISTENERS

document.addEventListener('DOMContentLoaded', Views.displayBooks);

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('input#book-title').value;
  const author = document.querySelector('input#book-author').value;
  const bookId = Math.random();

  const book = new Book(title, author, bookId);
  Views.addBook(book);
  Views.clearInputField();
  BookPersistence.addBookToLS(book);
});

bookShelf.addEventListener('click', (e) => {
  Views.removeBookDOM(e.target);
  const idItemToRemove = Number(e.target.previousSibling.innerText);
  BookPersistence.removeBookLS(idItemToRemove);
});

// SINGLE PAGE APP
const listLink = document.querySelector('#list-link');
const addNewLink = document.querySelector('#add-new-link');
const contactLink = document.querySelector('#contact-link');

listLink.addEventListener('click', () => {
  document.querySelector('#list').classList.remove('hide');
  document.querySelector('#add-book').classList.add('hide');
  document.querySelector('#contact').classList.add('hide');
});

addNewLink.addEventListener('click', () => {
  document.querySelector('#list').classList.add('hide');
  document.querySelector('#add-book').classList.remove('hide');
  document.querySelector('#contact').classList.add('hide');
});

contactLink.addEventListener('click', () => {
  document.querySelector('#list').classList.add('hide');
  document.querySelector('#add-book').classList.add('hide');
  document.querySelector('#contact').classList.remove('hide');
});