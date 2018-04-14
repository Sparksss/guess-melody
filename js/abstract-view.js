import createElement from "./create-elem";

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this.element);
    return this._element;
  }

  render() {
    return createElement(this.template);
  }
}

export default AbstractView;
