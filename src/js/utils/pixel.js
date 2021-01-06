class export Pixel() {
  initialize(r, g, b) {
    this._r = r;
    this._g = g;
    this._b = b;
  }

  get r() {
    return this._r;
  }

  get g() {
    return this._g;
  }

  get b() {
    return this._b;
  }

  dup() {
    return new Pixel(this.r, this.g, this.b);
  }
}
