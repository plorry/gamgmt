/**
 * Module for pre-loading game assets
 */
import { readdirSync } from 'fs';
import { join, resolve } from 'path';

export class Loader {
  /**
   * Load a single file.
   * @param {String} filename - the name of the file the load
   * @return {Promise} A promise that resolves upon the file loading
   */
  static loadFile(filename) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => resolve([img, filename]);
      img.onerror = () => reject([img, filename]);
      img.src = join("assets", filename);
    });
  }
  
  /**
   * Appends a filename: file key-value pair to a given Object
   * @param {Object} cache - an Object to which to append this file entry
   * @param {Array} [ file, filename ] - the Image file, and the string of its filename
   * @return {Object} an updated cache with the file appended
   */
  static addToCache(cache, [ file, filename ]) {
    const [ filenameNoExt, _ ] = filename.split('.');
    return Object.assign(cache, { [filenameNoExt]: file });
  }
  
  /**
   * Loads a directory of images
   * TODO - paths are currently hard-coded; readdirSync requires evaluation at compile time
   * @param {String} path - directory path to iterate across
   * @return {Object} An image cache Object, with entries for each loaded image
   */
  static loadImages(path="assets") {
    return Promise.all(readdirSync("dist/assets").map(Loader.loadFile)).then((data) => {
      return data.reduce(Loader.addToCache, {});
    });
  }
}
