const Persistence = class {
  static getLSContent() {
    let LSContent;
    if (localStorage.getItem('books') === null) {
      LSContent = [];
    } else {
      LSContent = JSON.parse(localStorage.getItem('books'));
    }
    return LSContent;
  }

  static addBookToLS(element) {
    const AwesomeBookDB = Persistence.getLSContent();
    AwesomeBookDB.push(element);
    localStorage.setItem('books', JSON.stringify(AwesomeBookDB));
  }

  static removeBookLS(id) {
    const newLSContent = Persistence.getLSContent();
    newLSContent.forEach((book, i, Arr) => {
      if (book.bookId === id) {
        Arr.splice(i, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(newLSContent));
  }
};

export default Persistence;