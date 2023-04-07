import throttle from 'lodash.throttle'; 

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput , 500));
restartForm();



function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
  localStorage.removeItem(STORAGE_KEY);
};



function onInput() {
  const savedMessage = {
    input: input.value,
    textarea: textarea.value,
  };
  localStorage.setItem(STORAGE_KEY , JSON.stringify(savedMessage))
};


function restartForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    input.value = savedMessage.input;
    textarea.value = savedMessage.textarea;
  }
}
