let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

function addBookToLibrary() {}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", () => {
  const form = document.getElementById("book-form");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

console.log(theHobbit.info());
