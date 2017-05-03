import { Display } from './gamgmt/display';
import { Loader } from './gamgmt/loader';

const main = function main(imgCache) {
  var d = Display.getCanvas();
  d.imageSmoothinEnabled = false;
  d.drawImage(imgCache['genie.gif'], 0, 0,120, 120, 0, 0, 220, 220);
};

window.onload = Loader.loadImages().then(main);
