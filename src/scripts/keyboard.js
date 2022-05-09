import Render from './render';
import keys from './keys';

export default class Keyboard {
  language = 'en';

  render;

  keyboard;

  textArea;

  constructor() {
    this.loadLanguage();
    this.render = new Render(this.language, keys);
  }

  start() {
    this.render.renderHTML();
    this.keyboard = this.render.keyboard;
    this.textArea = this.render.textArea;
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler);
  }

  saveLanguage() {
    localStorage.setItem('atmoKeyboardLang', this.language);
  }

  loadLanguage() {
    const lang = localStorage.getItem('atmoKeyboardLang');
    if (lang) this.language = lang;
    else this.language = 'en';
  }

  keyDownHandler(e) {
    e.preventDefault();

    if (keys.hasOwnProperty.call(keys, e.code) && keys[e.code].isFunc === false) {
      this.keyPrint(e.code);
    } else this.doFunctionKey(e.code);
    const key = document.querySelector(`[data-code="${e.code}"]`);

    if (key) key.classList.add('press');
  }

  keyUpHandler(e) {
    e.preventDefault();
    const key = document.querySelector(`[data-code="${e.code}"]`);
    if (key) key.classList.remove('press');
  }
  keyPrint(keyCode) {
    this.textArea.focus();
    let newKey;
    if (this.render.capsLock) newKey = keys[keyCode][this.language].key.toUpperCase();
    else newKey = keys[keyCode][this.language].key;
    if (keyCode === 'Tab') newKey = '\t';
    const newCursorPlace = this.textArea.selectionStart;
    const firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
    const secondStrPart = this.textArea.value.slice(this.textArea.selectionStart);
    this.textArea.value = firstStrPart + newKey + secondStrPart;
    console.log(this.textArea.value);
    // this.textArea.selectionStart = newCursorPlace + 1;
    this.textArea.selectionEnd = newCursorPlace + 1;
  }

  doFunctionKey(keyCode) {
    if (keyCode === 'Backspace') {
      const newCursorPlace = this.textArea.selectionStart;
      const firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart - 1);
      const secondStrPart = this.textArea.value.slice(this.textArea.selectionStart);
      this.textArea.value = firstStrPart + secondStrPart;
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
    }
  }
}
