let bookIncrement = 0;

let myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

addBooksToTable(myLibrary);
const form = document.querySelector("#book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(
    bookIncrement,
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").checked
  );
  closeModal();
});

// Adds a book to the library
function addBookToLibrary(id, title, author, pages, read) {
  const book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
  addBooksToTable([book]);
}

// Renders books into table row
function addBooksToTable(books) {
  const bookTable = document.querySelector("#book-table-body");
  books.forEach((book) => {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("book-row");
    tableRow.setAttribute("data-index", bookIncrement);
    bookIncrement++;

    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");

    const read = document.createElement("td");
    read.classList.add("read-status");
    read.addEventListener("click", (e) => {
      const bookIdx = e.target.parentElement.getAttribute("data-index");
      myLibrary.forEach((book) => {
        if (book.id == bookIdx) {
          book.read = book.read ? false : true;
          e.target.innerHTML = calculateRead(book.read);
        }
      });
    });

    const deleteBook = document.createElement("button");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.innerHTML = calculateRead(book.read);
    deleteBook.innerHTML = "✖";
    deleteBook.className = "delete-button";

    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    tableRow.appendChild(read);
    tableRow.appendChild(deleteBook);
    bookTable.appendChild(tableRow);

    deleteBook.addEventListener("click", (e) => {
      const bookIdx = e.target.parentElement.getAttribute("data-index");
      myLibrary.forEach((book, index) => {
        if (book.id == bookIdx) {
          myLibrary.splice(index, 1);
        }
      });
      e.target.parentElement.remove();
    });
  });
}

function calculateRead(read) {
  return read ? "Read" : "Unread";
}

// Modal overlay
const modal = document.querySelector("#new-book-modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
