import { default as Player } from '../../node_modules/@vimeo/player/src/player.js';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const key = 'seconds';

player.on('pause', () => {
  player.getCurrentTime().then(result => {
    try {
      localStorage.setItem(key, String(result));
    } catch (error) {
      console.error('Помилка збереження даних: ', error.message);
    }
  });

  const aValue = localStorage.getItem(key);
  console.log('In localStorage: ', Number(aValue));
});

player.on('play', () => {
  let aValue = 0;
  try {
    const res = localStorage.getItem(key);
    console.log(res);
    if (res !== null) aValue = Number(res);
  } catch (error) {
    console.error('Помилка завантаження даних: ', error.message);
  }

  player.setCurrentTime(aValue).then(result => {
    result = aValue;
  });
});
