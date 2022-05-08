import Render from './render';
import { keys } from './keys';

export default class Keyboard {
  language = 'en';
  render;
  keyboard;
  textArea;

  constructor() {
    this.language = this.loadLanguage();
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
    let language = localStorage.getItem('atmoKeyboardLang');
    if (language) return language;
    else return 'en';
  }
  keyDownHandler(e) {
    e.preventDefault();
    if (keys.hasOwnProperty(e.code) && keys[e.code].isFunc == false) this.keyPrint(e.code);
    else this.doFunctionKey(e.code);
    let key = document.querySelector('[data-code="' + e.code + '"]');

    if (key) key.classList.add('press');
  }
  keyUpHandler(e) {
    e.preventDefault();
    let key = document.querySelector('[data-code="' + e.code + '"]');
    if (key) key.classList.remove('press');
  }
  keyPrint(keyCode) {
    this.textArea.focus();
    let newKey;
    if (this.render.capsLock) newKey = keys[keyCode][this.language].key.toUpperCase();
    else newKey = keys[keyCode][this.language].key;
    let newCursorPlace = this.textArea.selectionStart;
    let firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
    let secondStrPart = this.textArea.value.slice(this.textArea.selectionStart);
    this.textArea.value = firstStrPart + newKey + secondStrPart;
    // this.textArea.selectionStart = newCursorPlace + 1;
    this.textArea.selectionEnd = newCursorPlace + 1;
  }
  doFunctionKey(keyCode) {
    if (keyCode == 'Backspace') {
      this.textArea.value = this.textArea.value.slice(0, this.textArea.value.length - 1);
    }
    if (keyCode == 'Delete') {
      let newCursorPlace = this.textArea.selectionStart;
      let firstStrPart = this.textArea.value.slice(0, this.textArea.selectionStart);
      let secondStrPart = this.textArea.value.slice(this.textArea.selectionStart + 1);
      this.textArea.value = firstStrPart + secondStrPart;
      this.textArea.selectionEnd = newCursorPlace;
    }
    if (keyCode == 'CapsLock') {
      this.render.capsLock = this.render.capsLock ? false : true;
      this.keyboard.remove();
      this.render.renderKeyboard();
      this.keyboard = this.render.keyboard;
    }
  }
}
