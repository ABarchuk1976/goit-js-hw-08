const _ = require('../../node_modules/lodash/lodash.js');
import { throttle } from '../../node_modules/lodash/throttle.js';
import Player from '../../node_modules/@vimeo/player/src/player.js';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const key = 'videoplayer-current-time';
let currentTime = 0;

const throttled = _.throttle(() => {
  try {
    player.getEnded().then(ended => {
      if (!ended) {
        player.getCurrentTime().then(seconds => {
          currentTime = seconds;
        });
      } else {
        currentTime = 0;
      }

      localStorage.setItem(key, String(currentTime));
    });
  } catch (error) {
    console.error('Помилка збереження даних: ', error.message);
  }
}, 1000);

player.on('timeupdate', throttled);

player.on('play', () => {
  try {
    currentTime = localStorage.getItem(key);
    player.setCurrentTime(Number(currentTime));
  } catch (error) {
    console.error('Помилка завантаження даних: ', error.message);
  }
});
