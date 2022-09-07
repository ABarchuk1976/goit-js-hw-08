import { default as Player } from '../../node_modules/@vimeo/player/src/player.js';
import { saveLocal, getLocal } from './local-storage.js';

console.log(Player);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let seconds = console.log(player);
player.on('pause', () => {
  const strLocal = player.getCurrentTime();
  saveLocal();
});

player.on('play', () => {
  try {
    const strLocal = getLocal(player.getCurrentTime());
  } catch {}
});
