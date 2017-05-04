import { Display } from './gamgmt/display';
import { Game } from './gamgmt/game';
import { Draw } from './gamgmt/draw';

const FPS = 30;
const shortFrame = (dt) => 1000 / dt > FPS;


const main = function main(gameData, timestamp=0, lasttime=0) {
  const dt = timestamp - lasttime;
  // throttle FPS
  shortFrame(dt) && setTimeout(()=>{}, (1000 / FPS) - dt); 
 
  Draw.render(gameData.canvas, gameData.levels);
  requestAnimationFrame((newtime) => main(gameData, newtime, timestamp));
};

window.onload = Game.initGame().then(main);
