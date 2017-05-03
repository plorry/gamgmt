export class Display {

  static getCanvas(id = "game-view") {
    /**
     * Get this game's canvas 2d context
     * @param {String} id | the id on the HTML node for the canvas
     * @return {Context} Returns the HTML canvas context
     */
    return document.getElementById(id).getContext("2d");
  }
}
