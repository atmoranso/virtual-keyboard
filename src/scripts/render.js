export default class Render {
  wrapper;
  keyboard;
  lang;

  constructor(lang) {
    this.lang = lang;
  }
  renderHTML(keys) {
    let title;
    let textArea;

    this.wrapper = this.createElement('DIV', 'app__wrapper');
    document.body.appendChild(this.wrapper);
    title = this.createElement('H1', 'app__title', 'RSS Virtual Keyboard');
    this.wrapper.appendChild(title);
    textArea = this.createElement('TEXTAREA', 'app__text-block', { rows: '10', cols: '100' });
    this.wrapper.appendChild(textArea);
    this.renderKeyboard(keys);
  }
  renderKeyboard(keys) {
    this.keyboard = this.createElement('DIV', 'app__keyboard keyboard');
    this.wrapper.appendChild(this.keyboard);

    let keyRow = this.createElement('DIV', 'keyboard__row');
    this.keyboard.appendChild(keyRow);

    const keysInRow = [14, 15, 13, 13, 9];
    let row = 0;
    let keyNum = 1;
    for (const key in keys) {
      if (keyNum > keysInRow[row]) {
        keyRow = this.createElement('DIV', 'keyboard__row');
        this.keyboard.appendChild(keyRow);
        keyNum = 1;
        row++;
      }

      let keyBlock = this.createElement('DIV', 'keyboard__key', keys[key][this.lang].key);
      keyBlock.style.width = keys[key].width;
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
