export class Images {
  static makeImage (image) {
    /**
     * A loaded image must be converted to a canvas to be drawn onto another canvas.
     * makeImage takes an image file (loaded) and returns a canvas version,
     * ready to be drawn onto a canvas.
     */
    const newCanvas = document.createElement('canvas');
    newCanvas.height = image.naturalHeight;
    newCanvas.width = image.naturalWidth;
  }
}
