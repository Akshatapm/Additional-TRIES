// book class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ui class: handle ui task
class UI {
  static dsiplayBooks() {
    const books = Store.getbooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>

    `;
    list.appendChild(row);
  }
  static deletebook(et) {
    if (et.classList.contains("delete")) {
      et.parentElement.parentElement.remove();
    }
  }
  static showalert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // make vanish in 2 s
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// store class: handles storage
class Store {
  static getbooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addbooks(book) {
    const books = Store.getbooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removebook(isbn) {
    const books = Store.getbooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// event: display  book
document.addEventListener("DOMContentLoaded", UI.dsiplayBooks);
// event: add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  if (title === "" || author === "" || isbn === "") {
    UI.showalert("Please fill all details", "danger");
  } else {
    //   instaniate book
    const book = new Book(title, author, isbn);

    //   add book to ui
    UI.addBookToList(book);

    // add book to store
    Store.addbooks(book);

    // show success message
    UI.showalert("Book added", "success");
    //   clear fields
    UI.clearFields();
  }
});

// event: remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // remove from ui
  UI.deletebook(e.target);

  // remove from storage
  Store.removebook(e.target.parentElement.previousElementSibling.textContent);

  // show success message
  UI.showalert("Book removed", "success");
});
