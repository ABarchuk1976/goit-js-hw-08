const _ = require('lodash');
import { throttle } from '../../node_modules/lodash/throttle.js';

const emailRef = document.getElementsByName('email');
const messageRef = document.getElementsByName('message');
const formRef = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
const THROTTLE_VALUE = 500;
let formState = {
  email: '',
  message: '',
};

function parseFormState() {
  try {
    const keyJSON = localStorage.getItem(key);

    return keyJSON ? JSON.parse(keyJSON) : { email: '', message: '' };
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
}

window.addEventListener('load', () => {
  formState = parseFormState();
  emailRef[0].value = formState.email;
  messageRef[0].value = formState.message;
});

function setKey() {
  try {
    localStorage.setItem(key, JSON.stringify(formState));

    // Can be deleted
    const Data = new Date();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const Seconds = Data.getSeconds();
    console.log(`${Hour}:${Minutes}:${Seconds}`);
    //
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
}

const throttled = _.throttle(setKey, THROTTLE_VALUE);

emailRef[0].addEventListener('input', event => {
  formState = parseFormState();
  formState.email = event.target.value;

  throttled();
});

messageRef[0].addEventListener('input', event => {
  formState = parseFormState();
  formState.message = event.target.value;

  throttled();
});

formRef.addEventListener('submit', event => {
  try {
    event.preventDefault();

    formState = parseFormState();

    console.log(
      `Об'єкт: {email: ${formState.email} та message: ${formState.message}}`
    );

    localStorage.removeItem(key);

    emailRef[0].value = parseFormState().email;
    messageRef[0].value = parseFormState().message;
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
});
