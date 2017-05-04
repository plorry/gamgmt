/**
 * The Game module loads asset data and brings it together with
 * levels and sprites for a coherent set of usable game resources.
 *
 * The Game module contains the game's main update method,
 * which determines how the game state updates from tick to tick.
 */
import { Loader } from './loader';
import { Level } from './level';
import { Sprite } from './sprite';
import { Display } from './display.js';

import { LEVELS } from '../data/levelData';

export class Game {
  /**
   * Load all game data and initialize the game object for passing
   * into our main loop.
   */
  static initGame() {
    return Promise.all([Loader.loadImages()]).then(( [ assetCache ] ) => ({
      levels: Level.loadLevel(LEVELS.level01, assetCache),
      canvas: Display.getCanvas(),
    }));
  }
}
