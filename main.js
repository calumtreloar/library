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

const form = document.querySelector("#book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").checked
  );

  console.table(myLibrary);
});

// Adds a book to the library
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {}
