const _ = require('lodash');
import { throttle } from '../../node_modules/lodash/throttle.js';

const emailRef = document.getElementsByName('email');
const messageRef = document.getElementsByName('message');
const formRef = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
const THROTTLE_VALUE = 500;
const formState = {
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
  emailRef[0].value = parseFormState().email;
  messageRef[0].value = parseFormState().message;
});

function setKey() {
  try {
    localStorage.setItem(key, JSON.stringify(formState));
    const Data = new Date();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const Seconds = Data.getSeconds();
    console.log(`${Hour}:${Minutes}:${Seconds}`);
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
}

const throttled = _.throttle(setKey, THROTTLE_VALUE);

emailRef[0].addEventListener('input', event => {
  formState.email = event.target.value;
  throttled();
});

messageRef[0].addEventListener('input', event => {
  formState.message = event.target.value;
  throttled();
});

formRef.addEventListener('submit', event => {
  try {
    event.preventDefault();
    let keyValue = parseFormState();
    formState.email = keyValue.email;
    formState.message = keyValue.message;
    console.log(
      `Об'єкт: з полями і значеннями email: ${formState.email} та message: ${formState.message}.} `
    );
    localStorage.removeItem(key);
    emailRef[0].value = parseFormState().email;
    messageRef[0].value = parseFormState().message;
  } catch (error) {
    console.error('Помилка: ', error.message);
  }
});
