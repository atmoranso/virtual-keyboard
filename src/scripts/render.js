export default class Render {
  wrapper;
  keyboard;
  lang;
  textArea;
  capsLock = false;
  keys;

  constructor(lang, keys) {
    this.lang = lang;
    this.keys = keys;
  }
  renderHTML() {
    let title;

    this.wrapper = this.createElement('DIV', 'app__wrapper');
    document.body.appendChild(this.wrapper);
    title = this.createElement('H1', 'app__title', 'RSS Virtual Keyboard');
    this.wrapper.appendChild(title);
    this.textArea = this.createElement('TEXTAREA', 'app__text-block', { rows: '10', cols: '100', autofocus: true });
    this.wrapper.appendChild(this.textArea);
    this.renderKeyboard();
  }
  renderKeyboard() {
    this.keyboard = this.createElement('DIV', 'app__keyboard keyboard');
    this.wrapper.appendChild(this.keyboard);

    let keyRow = this.createElement('DIV', 'keyboard__row');
    this.keyboard.appendChild(keyRow);

    const keysInRow = [14, 15, 13, 13, 9];
    let row = 0;
    let keyNum = 1;

    for (const key in this.keys) {
      if (keyNum > keysInRow[row]) {
        keyRow = this.createElement('DIV', 'keyboard__row');
        this.keyboard.appendChild(keyRow);
        keyNum = 1;
        row++;
      }
      let keySymb;
      if (this.capsLock === true && this.keys[key].isFunc !== true) keySymb = this.keys[key][this.lang].key.toUpperCase();
      else keySymb = this.keys[key][this.lang].key;

      let keyBlock = this.createElement('DIV', 'keyboard__key', keySymb);
      keyBlock.style.width = this.keys[key].width;
      keyBlock.dataset.code = key;
      keyRow.appendChild(keyBlock);
      keyNum++;
    }
  }
  createElement(tag, cssClass, innerHTML, properties) {
    let element = document.createElement(tag);
    element.className = cssClass;
    if (typeof innerHTML == 'object') {
      properties = innerHTML;
      innerHTML = undefined;
    }
    if (innerHTML !== undefined) element.innerHTML = innerHTML;
    if (properties !== undefined) {
      for (const key in properties) {
        element[key] = properties[key];
      }
    }
    return element;
  }
}
