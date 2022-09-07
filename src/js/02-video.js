import { throttle } from 'lodash';
import { default as Player } from '../../node_modules/@vimeo/player/src/player.js';
import { throttle } from '../../node_modules/lodash/throttle.js';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const key = 'videoplayer-current-time';
const _ = require('../../node_modules/lodash/lodash.js');
const throttled = _.throttle(function () {
  player.getCurrentTime(key);
}, 1000);

player.on('timeupdate', () => {
  throttled.then(result => {
    try {
      console.log('Pause at: ', result);
      localStorage.setItem(key, String(result));
    } catch (error) {
      console.error('Помилка збереження даних: ', error.message);
    }

    const aValue = localStorage.getItem(key);
    console.log('In localStorage: ', Number(aValue));
  });
});

player.on('play', () => {
  let aValue = 0;
  try {
    const res = localStorage.getItem(key);
    console.log(typeof res);
    console.log('Start from: ', res);
    if (res !== null) aValue = Number(res);
  } catch (error) {
    console.error('Помилка завантаження даних: ', error.message);
  }

  player.setCurrentTime(aValue).then(result => {
    result = aValue;
  });
});
