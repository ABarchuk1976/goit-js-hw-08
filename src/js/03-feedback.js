const _ = require('../../node_modules/lodash/lodash.js');
import { throttle } from '../../node_modules/lodash/throttle.js';

const emailRef = document.getElementsByName('email');
const messageRef = document.getElementsByName('message');
const submitBtnRef = document.getElementsByTagName('button');

console.log(emailRef[0]);

const key = 'feedback-form-state';
const TROTTLE_VALUE = 500;
let formState = {
  email: '',
  message: '',
};

console.log(formState);

const parseFormState = () => {
  try {
    const keyJSON = localStorage.getItem(key);
    const formState = keyJSON
      ? JSON.parse(keyJSON)
      : { email: '', message: '' };

    return formState;
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
};

window.addEventListener('load', () => {
  formState = parseFormState;

  console.log('When load', formState);

  emailRef[0].value = formState.email;
  messageRef[0].value = formState.message;
});

function throttledEmail(event) {
  _.throttle(() => {
    const inputedEmail = event.currentTarget.value;
    try {
      formState = parseFormState;
      formState.email = inputedEmail;
      localStorage.setItem(key, JSON.stringify(formState));
    } catch (error) {
      console.error('Помилка: ', error.message);
    }

    console.log('Changed Email in ', formState);
  }, TROTTLE_VALUE);
}

function throttledMessage(event) {
  _.throttle(() => {
    const inputedMessage = event.currentTarget.value;
    try {
      formState = parseFormState;
      formState.message = inputedMessage;
      localStorage.setItem(key, JSON.stringify(formState));
    } catch (error) {
      console.error('Помилка: ', error.message);
    }

    console.log('Changed Message in ', formState);
  }, TROTTLE_VALUE);
}

emailRef[0].addEventListener('input', event => throttledEmail(event));
messageRef[0].addEventListener('input', event => throttledMessage(event));

submitBtnRef[0].addEventListener('submit', () => {
  try {
    formState = parseFormState;
    console.log(
      `Об'єкт: полями і значеннями email: ${formState.email} та message: ${formState.message}.} `
    );
    localStorage.clear();
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
});
