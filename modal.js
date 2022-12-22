//jshint esversion:6
// we use modal because of the background of the modal takes the whole width and height
const btn = document.querySelector('#button'), modal = document.querySelector('#modal'), close = document.querySelector('.bi-x');
// ! We can not use addeventlistener directly without declaring const before it will be undefined
btn.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);

function openModal(x) {
  'use strict';
  x.preventDefault();
  modal.style.display = 'block';
}

function closeModal() {
  'use strict';
  modal.style.display = 'none';
}