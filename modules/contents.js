/* eslint-disable brace-style */
const collection = document.querySelector('.collection');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#addBtn');
const heading = document.getElementById('title1');
const listSec = document.querySelector('.list');
const addNewSec = document.querySelector('.addNew');
const contactSec = document.querySelector('.contact');
let id = 1 || JSON.parse(localStorage.getItem('maxId'));

class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static displayBooks = () => {
    collection.innerHTML = '';
    id = JSON.parse(localStorage.getItem('maxId'));
    const keys = Object.keys(localStorage);
    keys.forEach((element) => {
      if (element === 'maxId') return;
      const retrievedBook = JSON.parse(localStorage.getItem(element));
      this.createElements(retrievedBook.title, retrievedBook.author, element);
    });
  };

  static addBook = (title, author, id) => {
    this.createElements(title, author, id);
  };

  static createElements = (title, author, id) => {
    const remBtn = [];
    const div = [];
    div[id] = document.createElement('div');
    div[id].setAttribute('id', id);
    const pText = document.createElement('p');
    pText.textContent = `'${title}' by ${author}`;

    remBtn[id] = document.createElement('button');
    remBtn[id].setAttribute('id', id);
    remBtn[id].textContent = 'Remove';
    remBtn[id].addEventListener('click', (e) => {
      const key = e.target.id;
      div[e.target.id].remove();
      localStorage.removeItem(key);
      if (collection.innerHTML === '') {
        collection.style.border = 'none';
      }
    });
    div[id].append(pText, remBtn[id]);
    collection.appendChild(div[id]);
    collection.style.border = '3px solid black';
  };

  static storeLS = (book, id) => {
    localStorage.setItem(id, JSON.stringify(book));
  };

  static clearInputs = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}

// Add Button Event
addBtn.addEventListener('click', (e) => {
  if (title.value === '' || author.value === '') {
    e.preventDefault();
  }
  // eslint-disable-next-line no-trailing-spaces

  else {
    BookObject.addBook(title.value, author.value, id);
    const book = new BookObject(title.value, author.value, id);
    BookObject.storeLS(book, id);
    id += 1;
    localStorage.setItem('maxId', id);
    BookObject.clearInputs();
    listSec.style.display = 'block';
    addNewSec.style.display = 'none';
    contactSec.style.display = 'none';
    heading.innerHTML = 'All Awesome Books';
  }

  e.preventDefault();
});

window.onload = () => {
  BookObject.displayBooks();
  if (collection.innerHTML === '') {
    collection.style.border = 'none';
  }
};
