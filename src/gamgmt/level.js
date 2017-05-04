/**
 * The Level module loads and returns Levels, which are the effective
 * scenes of a game.
 */
export class Level {
  /**
   * Build a level from its data (object) and the asset cache
   *
   * @param {Obejct} levelData - data describing the game level
   * @param {Object} levelCache - asset cache
   * @return {Object} Object representing the constructed level
   */
  static loadLevel(levelData, levelCache) {
    return {
      backgroundImage: levelCache[levelData.background]
    };
  }
}
