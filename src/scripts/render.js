export default class Render {
  wrapper;

  keyboard;

  lang;

  textArea;

  capsLock = false;

  isShift = false;

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
    this.renderFooter();
  }

  renderFooter() {
    const footer = Render.createElement(
      'DIV',
      'app__footer',
      'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe ctrl + alt',
    );
    this.wrapper.appendChild(footer);
  }

  renderKeyboard() {
    this.keyboard = Render.createElement('DIV', 'app__keyboard keyboard');
    this.textArea.after(this.keyboard);

    let keyRow = Render.createElement('DIV', 'keyboard__row');
    this.keyboard.appendChild(keyRow);

    const keysInRow = [14, 15, 13, 13, 9];
    let row = 0;
    let keyNum = 1;

    Object.keys(this.keys).forEach((key) => {
      if (keyNum > keysInRow[row]) {
        keyRow = Render.createElement('DIV', 'keyboard__row');
        this.keyboard.appendChild(keyRow);
        keyNum = 1;
        row += 1;
      }
      let keySymb;
      if (this.capsLock === true && this.keys[key].isFunc !== true) {
        if (this.isShift) {
          if (this.keys[key][this.lang].keyUp !== null) {
            keySymb = this.keys[key][this.lang].keyUp;
          } else {
            keySymb = this.keys[key][this.lang].key;
          }
        } else {
          keySymb = this.keys[key][this.lang].key.toUpperCase();
        }
      } else if (this.isShift) {
        if (this.keys[key][this.lang].keyUp !== null) {
          keySymb = this.keys[key][this.lang].keyUp;
        } else {
          keySymb = this.keys[key][this.lang].key.toUpperCase();
        }
      } else {
        keySymb = this.keys[key][this.lang].key;
      }

      const keyBlock = Render.createElement('DIV', 'keyboard__key', keySymb);
      if (key === 'CapsLock' && this.capsLock === true) {
        keyBlock.classList.add('caps-on');
      }
      if (key === 'CapsLock' && this.capsLock === false) keyBlock.classList.remove('caps-on');
      keyBlock.style.width = this.keys[key].width;
      keyBlock.dataset.code = key;
      keyRow.appendChild(keyBlock);
      keyNum += 1;
    });
  }

  static createElement(tag, cssClass, innerHTML, properties) {
    let propertiesArr = properties;
    let innerHTMLArr = innerHTML;
    const element = document.createElement(tag);
    element.className = cssClass;
    if (typeof innerHTMLArr === 'object') {
      propertiesArr = innerHTMLArr;
      innerHTMLArr = undefined;
    }

    if (innerHTMLArr !== undefined) element.innerHTML = innerHTMLArr;
    if (propertiesArr !== undefined) {
      // for (const key in propertiesArr) {
      //   element[key] = propertiesArr[key];
      // }

      Object.keys(propertiesArr).forEach((key) => {
        element[key] = propertiesArr[key];
      });
    }
    return element;
  }
}
