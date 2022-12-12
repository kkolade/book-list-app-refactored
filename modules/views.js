export class Views {
  static displayBooks() {
    const bookCase = BookPersistence.getLSContent();
    bookCase.forEach((book) => Views.addBook(book));
  }

  static addBook(book) {
    // Create elements required for individual book
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookId = document.createElement('span');
    const conjunction = document.createElement('span');
    const delBtn = document.createElement('button');

    // Assigning class, attributes and text content to the elements
    bookCard.className = 'book';
    bookShelf.className = 'book-shelf';
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = book.author;
    bookId.innerText = book.bookId;
    bookId.setAttribute('style', 'display: none;');
    conjunction.className = 'conjunction';
    conjunction.textContent = 'by';
    delBtn.className = 'delete-button';
    delBtn.setAttribute('type', 'button');
    delBtn.textContent = 'Delete Book';

    // Build a book card and attach it to the library
    bookCard.append(bookTitle, conjunction, bookAuthor, bookId, delBtn);
    bookShelf.appendChild(bookCard);
  }

  static clearInputField() {
    document.querySelector('input#book-title').value = '';
    document.querySelector('input#book-author').value = '';
  }

  static removeBookDOM(item) {
    if (item.classList.contains('delete-button')) {
      item.parentElement.remove();
    }
  }
}