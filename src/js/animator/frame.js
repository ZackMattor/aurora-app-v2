export class Frame {
  initializer(num_pixels, initial_color) {
    this._state = [];

    for(let i=0; i<num_pixels; i++) {
      this._state.push(initial_color.dup());
    }
  }
}
