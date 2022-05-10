import Render from './render';
import keys from './keys';

export default class Keyboard {
  language = 'en';

  render;

  keyboard;

  textArea;

  ShiftLeft = false;

  ShiftRight = false;

  isAltLeft = false;

  isControlLeft = false;

  isShiftClicked = false;

  constructor() {
    this.loadLanguage();
    this.render = new Render(this.language, keys);
  }

  start() {
    this.render.renderHTML();
    this.keyboard = this.render.keyboard;
    this.textArea = this.render.textArea;
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
    this.keyboard.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    this.keyboard.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    this.keyboard.addEventListener('mouseout', this.mouseUpHandler.bind(this));
  }

  saveLanguage() {
    localStorage.setItem('atmoKeyboardLang', this.language);
  }

  loadLanguage() {
    const lang = localStorage.getItem('atmoKeyboardLang');
    if (lang) this.language = lang;
    else this.language = 'en';
  }

  mouseDownHandler(e) {
    e.preventDefault();

    if (e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'ShiftRight') {
      this.isShiftClicked = true;
    }
    const event = new KeyboardEvent('keydown', {
      code: e.target.dataset.code,
    });

    document.dispatchEvent(event);
  }

  mouseUpHandler(e) {
    e.preventDefault();
    if (
      (e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'ShiftRight')
      && !this.isShiftClicked
    ) {
      return;
    }
    const event = new KeyboardEvent('keyup', {
      code: e.target.dataset.code,
    });

    document.dispatchEvent(event);
    this.isShiftClicked = false;
  }

  keyDownHandler(e) {
    e.preventDefault();

    if (keys.hasOwnProperty.call(keys, e.code) && keys[e.code].isFunc === false) {
      this.keyPrint(e.code);
    } else if (e.repeat !== true) this.doFunctionKey(e.code);
    if (e.repeat === true && (e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter')) this.doFunctionKey(e.code);
    const key = document.querySelector(`[data-code="${e.code}"]`);

    if (key) key.classList.add('press');
  }

  keyUpHandler(e) {
    e.preventDefault();
    const key = document.querySelector(`[data-code="${e.code}"]`);
    if (key) key.classList.remove('press');
    if (
      (e.code === 'ControlLeft' && this.isAltLeft)
      || (e.code === 'AltLeft' && this.isControlLeft)
    ) {
      this.language = this.language === 'en' ? 'ru' : 'en';
      this.render.lang = this.language;
      this.saveLanguage();
      this.keyboard.remove();
      this.render.renderKeyboard();
      this.keyboard = this.render.keyboard;
      this.keyboard.addEventListener('mousedown', this.mouseDownHandler.bind(this));
      this.keyboard.addEventListener('mouseup', this.mouseUpHandler.bind(this));
      this.keyboard.addEventListener('mouseout', this.mouseUpHandler.bind(this));
    }
    if (e.code === 'AltLeft') this.isAltLeft = false;
    if (e.code === 'ControlLeft') this.isControlLeft = false;
    if (e.code === 'ShiftLeft') {
      this.ShiftLeft = false;
      this.shiftHandler();
    }
    if (e.code === 'ShiftRight') {
      this.ShiftRight = false;
      this.shiftHandler();
    }
  }

  keyPrint(keyCode) {
    this.textArea.focus();
    let newKey;
    if (this.render.capsLock) {
      if (this.render.isShift) {
        if (keys[keyCode][this.language].keyUp !== null) {
          newKey = keys[keyCode][this.language].keyUp;
        } else {
          newKey = keys[keyCode][this.language].key;
        }
      } else {
        newKey = keys[keyCode][this.language].key.toUpperCase();
      }
    } else if (this.render.isShift) {
      if (keys[keyCode][this.language].keyUp !== null) {
        newKey = keys[keyCode][this.language].keyUp;
      } else {
        newKey = keys[keyCode][this.language].key.toUpperCase();
      }
    } else {
      newKey = keys[keyCode][this.language].key;
    }
    if (keyCode === 'Tab') newKey = '\t';
    if (keyCode === 'Enter') newKey = '\n';
    const newCursorPlace = this.textArea.selectionStart;
    const firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
    const secondStrPart = this.textArea.value.slice(this.textArea.selectionStart);
    this.textArea.value = firstStrPart + newKey + secondStrPart;
    // this.textArea.selectionStart = newCursorPlace + 1;
    this.textArea.selectionEnd = newCursorPlace + 1;
  }

  doFunctionKey(keyCode) {
    if (keyCode === 'Backspace') {
      const newCursorPlace = this.textArea.selectionStart;
      const firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
      const secondStrPart = this.textArea.value.slice(this.textArea.selectionStart);
      this.textArea.value = firstStrPart.slice(0, firstStrPart.length - 1) + secondStrPart;
      this.textArea.selectionEnd = newCursorPlace - 1;
    }
    if (keyCode === 'Delete') {
      const newCursorPlace = this.textArea.selectionStart;
      const firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
      const secondStrPart = this.textArea.value.slice(this.textArea.selectionStart + 1);
      this.textArea.value = firstStrPart + secondStrPart;
      this.textArea.selectionEnd = newCursorPlace;
    }
    if (keyCode === 'CapsLock') {
      this.render.capsLock = !this.render.capsLock;
      this.keyboard.remove();
      this.render.renderKeyboard();
      this.keyboard = this.render.keyboard;
      this.keyboard.addEventListener('mousedown', this.mouseDownHandler.bind(this));
      this.keyboard.addEventListener('mouseup', this.mouseUpHandler.bind(this));
      this.keyboard.addEventListener('mouseout', this.mouseUpHandler.bind(this));
    }
    if (keyCode === 'AltLeft') {
      this.isAltLeft = true;
    }
    if (keyCode === 'ControlLeft') {
      this.isControlLeft = true;
    }
    if (keyCode === 'ShiftLeft') {
      this.ShiftLeft = true;

      this.shiftHandler();
    }
    if (keyCode === 'ShiftRight') {
      this.ShiftRight = true;
      this.shiftHandler();
    }
  }

  shiftHandler() {
    this.render.isShift = !this.render.isShift;
    this.keyboard.remove();
    this.render.renderKeyboard();
    this.keyboard = this.render.keyboard;
    this.keyboard.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    this.keyboard.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    this.keyboard.addEventListener('mouseout', this.mouseUpHandler.bind(this));
  }
}
