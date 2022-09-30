const itemBtn = document.querySelector('#itemBtn');
const newBtn = document.querySelector('#newBtn');
const contBtn = document.querySelector('#contBtn');
const heading = document.getElementById('title1');
const listSec = document.querySelector('.list');
const addNewSec = document.querySelector('.addNew');
const contactSec = document.querySelector('.contact');

itemBtn.addEventListener('click', () => {
  itemBtn.classList.add('active');
  newBtn.classList.remove('active');
  contBtn.classList.remove('active');
  listSec.style.display = 'block';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'none';
  heading.innerHTML = 'All Awesome Books';
});

newBtn.addEventListener('click', () => {
  itemBtn.classList.remove('active');
  newBtn.classList.add('active');
  contBtn.classList.remove('active');
  listSec.style.display = 'none';
  addNewSec.style.display = 'block';
  contactSec.style.display = 'none';
  heading.innerHTML = 'Add New Book';
});

contBtn.addEventListener('click', () => {
  itemBtn.classList.remove('active');
  newBtn.classList.remove('active');
  contBtn.classList.add('active');
  listSec.style.display = 'none';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'flex';
  heading.innerHTML = 'Contact';
});
