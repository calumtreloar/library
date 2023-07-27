let myLibrary = [
  {
    title: "A song of fire and ice",
    author: "George R. R. Martin",
    pages: 650,
    read: true,
  },
  {
    title: "A dance with dragons",
    author: "George R. R. Martin",
    pages: 850,
    read: false,
  },
];

function Book(title, author, pages, read) {
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
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").checked
  );
  closeModal();

  console.table(myLibrary);
});

// Adds a book to the library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  addBooksToTable([book]);
}

function addBooksToTable(books) {
  const bookTable = document.querySelector("#book-table-body");
  books.forEach((book) => {
    const tableRow = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");
    const deleteBook = document.createElement("td");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    deleteBook.innerHTML = "✖";
    deleteBook.className = "delete-button";

    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    tableRow.appendChild(read);
    tableRow.appendChild(deleteBook);
    bookTable.appendChild(tableRow);
  });
}

function deleteBook() {}

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
