export class Display {

  static getCanvas(id = "game-view") {
    /**
     * Get this game's canvas element
     * @param {String} id | the id on the HTML node for the canvas
     * @return {Node} Returns the HTML canvas node
     */
    const canvas = document.getElementById(id);
    canvas.height = 400;
    canvas.width = 640;
    
    return canvas.getContext("2d");
  }
}
