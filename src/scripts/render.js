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
    this.wrapper = Render.createElement('DIV', 'app__wrapper');
    document.body.appendChild(this.wrapper);
    const title = Render.createElement('H1', 'app__title', 'RSS Virtual Keyboard');
    this.wrapper.appendChild(title);
    this.textArea = Render.createElement('TEXTAREA', 'app__text-block', {
      rows: '10',
      cols: '100',
      autofocus: true,
    });
    this.wrapper.appendChild(this.textArea);
    this.renderKeyboard();
  }

  renderKeyboard() {
    this.keyboard = Render.createElement('DIV', 'app__keyboard keyboard');
    this.wrapper.appendChild(this.keyboard);

    let keyRow = Render.createElement('DIV', 'keyboard__row');
    this.keyboard.appendChild(keyRow);

    const keysInRow = [14, 15, 13, 13, 9];
    let row = 0;
    let keyNum = 1;

    // for (const key in this.keys) {
    //   if (keyNum > keysInRow[row]) {
    //     keyRow = this.createElement('DIV', 'keyboard__row');
    //     this.keyboard.appendChild(keyRow);
    //     keyNum = 1;
    //     row++;
    //   }
    //   let keySymb;
    //   if (this.capsLock === true && this.keys[key].isFunc !== true) keySymb = this.keys[key][this.lang].key.toUpperCase();
    //   else keySymb = this.keys[key][this.lang].key;

    //   const keyBlock = this.createElement('DIV', 'keyboard__key', keySymb);
    //   keyBlock.style.width = this.keys[key].width;
    //   keyBlock.dataset.code = key;
    //   keyRow.appendChild(keyBlock);
    //   keyNum++;
    // }
    Object.keys(this.keys).forEach((key) => {
      if (keyNum > keysInRow[row]) {
        keyRow = Render.createElement('DIV', 'keyboard__row');
        this.keyboard.appendChild(keyRow);
        keyNum = 1;
        row += 1;
      }
      let keySymb;
      if (this.capsLock === true && this.keys[key].isFunc !== true) {
        keySymb = this.keys[key][this.lang].key.toUpperCase();
      } else keySymb = this.keys[key][this.lang].key;

      const keyBlock = Render.createElement('DIV', 'keyboard__key', keySymb);
      keyBlock.style.width = this.keys[key].width;
      keyBlock.dataset.code = key;
      keyRow.appendChild(keyBlock);
      keyNum += 1;
    });
  }

  static createElement(tag, cssClass, innerHTML, properties) {
    const element = document.createElement(tag);
    element.className = cssClass;
    if (typeof innerHTML === 'object') {
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
