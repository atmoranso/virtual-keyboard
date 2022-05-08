import Render from './render';
import { keys } from './keys';

export default class Keyboard {
  language = 'en';
  render;

  constructor() {
    this.language = this.loadLanguage();
    this.render = new Render(this.language);
  }
  start() {
    this.render.renderHTML(keys);
  }
  saveLanguage() {
    localStorage.setItem('atmoKeyboardLang', this.language);
  }
  loadLanguage() {
    let language = localStorage.getItem('atmoKeyboardLang');
    if (language) return language;
    else return 'en';
  }
}
