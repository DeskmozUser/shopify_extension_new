const hideButton = document.querySelector('#button-container');
const myDiv = document.querySelector('#myDiv');
myDiv.classList.toggle('hidden');


hideButton.addEventListener('click', () => {
  myDiv.classList.toggle('hidden');
});