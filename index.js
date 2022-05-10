(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var n=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,"wrapper",void 0),i(this,"keyboard",void 0),i(this,"lang",void 0),i(this,"textArea",void 0),i(this,"capsLock",!1),i(this,"isShift",!1),i(this,"keys",void 0),this.lang=e,this.keys=t}var r,s,y;return r=n,y=[{key:"createElement",value:function(t,i,n,r){var s=r,y=n,a=document.createElement(t);return a.className=i,"object"===e(y)&&(s=y,y=void 0),void 0!==y&&(a.innerHTML=y),void 0!==s&&Object.keys(s).forEach((function(e){a[e]=s[e]})),a}}],(s=[{key:"renderHTML",value:function(){this.wrapper=n.createElement("DIV","app__wrapper"),document.body.appendChild(this.wrapper);var e=n.createElement("H1","app__title","RSS Virtual Keyboard");this.wrapper.appendChild(e),this.textArea=n.createElement("TEXTAREA","app__text-block",{rows:"10",cols:"100",autofocus:!0}),this.wrapper.appendChild(this.textArea),this.renderKeyboard(),this.renderFooter()}},{key:"renderFooter",value:function(){var e=n.createElement("DIV","app__footer","Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe ctrl + alt");this.wrapper.appendChild(e)}},{key:"renderKeyboard",value:function(){var e=this;this.keyboard=n.createElement("DIV","app__keyboard keyboard"),this.textArea.after(this.keyboard);var t=n.createElement("DIV","keyboard__row");this.keyboard.appendChild(t);var i=[14,15,13,13,9],r=0,s=1;Object.keys(this.keys).forEach((function(y){var a;s>i[r]&&(t=n.createElement("DIV","keyboard__row"),e.keyboard.appendChild(t),s=1,r+=1),a=!0===e.capsLock&&!0!==e.keys[y].isFunc?e.isShift?null!==e.keys[y][e.lang].keyUp?e.keys[y][e.lang].keyUp:e.keys[y][e.lang].key:e.keys[y][e.lang].key.toUpperCase():e.isShift?null!==e.keys[y][e.lang].keyUp?e.keys[y][e.lang].keyUp:e.keys[y][e.lang].key.toUpperCase():e.keys[y][e.lang].key;var k=n.createElement("DIV","keyboard__key",a);"CapsLock"===y&&!0===e.capsLock&&k.classList.add("caps-on"),"CapsLock"===y&&!1===e.capsLock&&k.classList.remove("caps-on"),k.style.width=e.keys[y].width,k.dataset.code=y,t.appendChild(k),s+=1}))}}])&&t(r.prototype,s),y&&t(r,y),Object.defineProperty(r,"prototype",{writable:!1}),n}();const r={Backquote:{en:{key:"`",keyUp:"`"},ru:{key:"ё",keyUp:null},isFunc:!1,width:"40px"},Digit1:{en:{key:"1",keyUp:"!"},ru:{key:"1",keyUp:"!"},isFunc:!1,width:"40px"},Digit2:{en:{key:"2",keyUp:"@"},ru:{key:"2",keyUp:'"'},isFunc:!1,width:"40px"},Digit3:{en:{key:"3",keyUp:"#"},ru:{key:"3",keyUp:"№"},isFunc:!1,width:"40px"},Digit4:{en:{key:"4",keyUp:"$"},ru:{key:"4",keyUp:";"},isFunc:!1,width:"40px"},Digit5:{en:{key:"5",keyUp:"%"},ru:{key:"5",keyUp:"%"},isFunc:!1,width:"40px"},Digit6:{en:{key:"6",keyUp:"^"},ru:{key:"6",keyUp:":"},isFunc:!1,width:"40px"},Digit7:{en:{key:"7",keyUp:"&"},ru:{key:"7",keyUp:"?"},isFunc:!1,width:"40px"},Digit8:{en:{key:"8",keyUp:"*"},ru:{key:"8",keyUp:"*"},isFunc:!1,width:"40px"},Digit9:{en:{key:"9",keyUp:"("},ru:{key:"9",keyUp:"("},isFunc:!1,width:"40px"},Digit0:{en:{key:"0",keyUp:")"},ru:{key:"0",keyUp:")"},isFunc:!1,width:"40px"},Minus:{en:{key:"-",keyUp:"_"},ru:{key:"-",keyUp:"_"},isFunc:!1,width:"40px"},Equal:{en:{key:"=",keyUp:"+"},ru:{key:"=",keyUp:"+"},isFunc:!1,width:"40px"},Backspace:{en:{key:"Backspace",keyUp:"Backspace"},ru:{key:"Backspace",keyUp:"Backspace"},isFunc:!0,width:"100px"},Tab:{en:{key:"TAB",keyUp:"TAB"},ru:{key:"TAB",keyUp:"TAB"},isFunc:!1,width:"43px"},KeyQ:{en:{key:"q",keyUp:null},ru:{key:"й",keyUp:null},isFunc:!1,width:"40px"},KeyW:{en:{key:"w",keyUp:null},ru:{key:"ц",keyUp:null},isFunc:!1,width:"40px"},KeyE:{en:{key:"e",keyUp:null},ru:{key:"у",keyUp:null},isFunc:!1,width:"40px"},KeyR:{en:{key:"r",keyUp:null},ru:{key:"к",keyUp:null},isFunc:!1,width:"40px"},KeyT:{en:{key:"t",keyUp:null},ru:{key:"е",keyUp:null},isFunc:!1,width:"40px"},KeyY:{en:{key:"y",keyUp:null},ru:{key:"н",keyUp:null},isFunc:!1,width:"40px"},KeyU:{en:{key:"u",keyUp:null},ru:{key:"г",keyUp:null},isFunc:!1,width:"40px"},KeyI:{en:{key:"i",keyUp:null},ru:{key:"ш",keyUp:null},isFunc:!1,width:"40px"},KeyO:{en:{key:"o",keyUp:null},ru:{key:"щ",keyUp:null},isFunc:!1,width:"40px"},KeyP:{en:{key:"p",keyUp:null},ru:{key:"з",keyUp:null},isFunc:!1,width:"40px"},BracketLeft:{en:{key:"[",keyUp:"{"},ru:{key:"х",keyUp:null},isFunc:!1,width:"40px"},BracketRight:{en:{key:"]",keyUp:"}"},ru:{key:"ъ",keyUp:null},isFunc:!1,width:"40px"},Backslash:{en:{key:"\\",keyUp:"|"},ru:{key:"\\",keyUp:"/"},isFunc:!1,width:"40px"},Delete:{en:{key:"Del",keyUp:"Del"},ru:{key:"Del",keyUp:"Del"},isFunc:!0,width:"43px"},CapsLock:{en:{key:"CapsLock",keyUp:"CapsLock"},ru:{key:"CapsLock",keyUp:"CapsLock"},isFunc:!0,width:"90px"},KeyA:{en:{key:"a",keyUp:null},ru:{key:"ф",keyUp:null},isFunc:!1,width:"40px"},KeyS:{en:{key:"s",keyUp:null},ru:{key:"ы",keyUp:null},isFunc:!1,width:"40px"},KeyD:{en:{key:"d",keyUp:null},ru:{key:"в",keyUp:null},isFunc:!1,width:"40px"},KeyF:{en:{key:"f",keyUp:null},ru:{key:"а",keyUp:null},isFunc:!1,width:"40px"},KeyG:{en:{key:"g",keyUp:null},ru:{key:"п",keyUp:null},isFunc:!1,width:"40px"},KeyH:{en:{key:"h",keyUp:null},ru:{key:"р",keyUp:null},isFunc:!1,width:"40px"},KeyJ:{en:{key:"j",keyUp:null},ru:{key:"о",keyUp:null},isFunc:!1,width:"40px"},KeyK:{en:{key:"k",keyUp:null},ru:{key:"л",keyUp:null},isFunc:!1,width:"40px"},KeyL:{en:{key:"l",keyUp:null},ru:{key:"д",keyUp:null},isFunc:!1,width:"40px"},Semicolon:{en:{key:";",keyUp:":"},ru:{key:"ж",keyUp:null},isFunc:!1,width:"40px"},Quote:{en:{key:"'",keyUp:'"'},ru:{key:"э",keyUp:null},isFunc:!1,width:"40px"},Enter:{en:{key:"ENTER",keyUp:"ENTER"},ru:{key:"ENTER",keyUp:"ENTER"},isFunc:!1,width:"90px"},ShiftLeft:{en:{key:"Shift",keyUp:"Shift"},ru:{key:"Shift",keyUp:"Shift"},isFunc:!0,width:"90px"},KeyZ:{en:{key:"z",keyUp:null},ru:{key:"я",keyUp:null},isFunc:!1,width:"40px"},KeyX:{en:{key:"x",keyUp:null},ru:{key:"ч",keyUp:null},isFunc:!1,width:"40px"},KeyC:{en:{key:"c",keyUp:null},ru:{key:"с",keyUp:null},isFunc:!1,width:"40px"},KeyV:{en:{key:"v",keyUp:null},ru:{key:"м",keyUp:null},isFunc:!1,width:"40px"},KeyB:{en:{key:"b",keyUp:null},ru:{key:"и",keyUp:null},isFunc:!1,width:"40px"},KeyN:{en:{key:"n",keyUp:null},ru:{key:"т",keyUp:null},isFunc:!1,width:"40px"},KeyM:{en:{key:"m",keyUp:null},ru:{key:"ь",keyUp:null},isFunc:!1,width:"40px"},Comma:{en:{key:",",keyUp:"<"},ru:{key:"б",keyUp:null},isFunc:!1,width:"40px"},Period:{en:{key:".",keyUp:">"},ru:{key:"ю",keyUp:null},isFunc:!1,width:"40px"},Slash:{en:{key:"/",keyUp:"?"},ru:{key:".",keyUp:","},isFunc:!1,width:"40px"},ArrowUp:{en:{key:"▲",keyUp:"▲"},ru:{key:"▲",keyUp:"▲"},isFunc:!1,width:"40px"},ShiftRight:{en:{key:"Shift",keyUp:"Shift"},ru:{key:"Shift",keyUp:"Shift"},isFunc:!0,width:"90px"},ControlLeft:{en:{key:"Ctrl",keyUp:"Ctrl"},ru:{key:"Ctrl",keyUp:"Ctrl"},isFunc:!0,width:"40px"},MetaLeft:{en:{key:"Win",keyUp:"Win"},ru:{key:"Win",keyUp:"Win"},isFunc:!0,width:"40px"},AltLeft:{en:{key:"Alt",keyUp:"Alt"},ru:{key:"Alt",keyUp:"Alt"},isFunc:!0,width:"40px"},Space:{en:{key:" ",keyUp:" "},ru:{key:" ",keyUp:" "},isFunc:!1,width:"322px"},AltRight:{en:{key:"Alt",keyUp:"Alt"},ru:{key:"Alt",keyUp:"Alt"},isFunc:!0,width:"40px"},ArrowLeft:{en:{key:"◄",keyUp:"◄"},ru:{key:"◄",keyUp:"◄"},isFunc:!1,width:"40px"},ArrowDown:{en:{key:"▼",keyUp:"▼"},ru:{key:"▼",keyUp:"▼"},isFunc:!1,width:"40px"},ArrowRight:{en:{key:"►",keyUp:"►"},ru:{key:"►",keyUp:"►"},isFunc:!1,width:"40px"},ControlRight:{en:{key:"Ctrl",keyUp:"Ctrl"},ru:{key:"Ctrl",keyUp:"Ctrl"},isFunc:!0,width:"40px"}};function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"language","en"),y(this,"render",void 0),y(this,"keyboard",void 0),y(this,"textArea",void 0),y(this,"ShiftLeft",!1),y(this,"ShiftRight",!1),y(this,"isAltLeft",!1),y(this,"isControlLeft",!1),y(this,"isShiftClicked",!1),y(this,"isAltCtrlClicked",!1),this.loadLanguage(),this.render=new n(this.language,r)}var t,i;return t=e,(i=[{key:"start",value:function(){this.render.renderHTML(),this.keyboard=this.render.keyboard,this.textArea=this.render.textArea,document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this)),this.keyboard.addEventListener("mousedown",this.mouseDownHandler.bind(this)),this.keyboard.addEventListener("mouseup",this.mouseUpHandler.bind(this)),this.keyboard.addEventListener("mouseout",this.mouseUpHandler.bind(this))}},{key:"saveLanguage",value:function(){localStorage.setItem("atmoKeyboardLang",this.language)}},{key:"loadLanguage",value:function(){var e=localStorage.getItem("atmoKeyboardLang");this.language=e||"en"}},{key:"mouseDownHandler",value:function(e){e.preventDefault(),"ControlLeft"!==e.target.dataset.code&&"AltLeft"!==e.target.dataset.code||(this.isAltCtrlClicked=!0),"ShiftLeft"!==e.target.dataset.code&&"ShiftRight"!==e.target.dataset.code||(this.isShiftClicked=!0);var t=new KeyboardEvent("keydown",{code:e.target.dataset.code});document.dispatchEvent(t)}},{key:"mouseUpHandler",value:function(e){if(e.preventDefault(),("ShiftLeft"!==e.target.dataset.code&&"ShiftRight"!==e.target.dataset.code||this.isShiftClicked)&&("ControlLeft"!==e.target.dataset.code&&"AltLeft"!==e.target.dataset.code||this.isAltCtrlClicked)){var t=new KeyboardEvent("keyup",{code:e.target.dataset.code});document.dispatchEvent(t),this.isShiftClicked=!1}}},{key:"keyDownHandler",value:function(e){e.preventDefault(),r.hasOwnProperty.call(r,e.code)&&!1===r[e.code].isFunc?this.keyPrint(e.code):!0!==e.repeat&&this.doFunctionKey(e.code),!0!==e.repeat||"Backspace"!==e.code&&"Delete"!==e.code&&"Enter"!==e.code||this.doFunctionKey(e.code);var t=document.querySelector('[data-code="'.concat(e.code,'"]'));t&&t.classList.add("press")}},{key:"keyUpHandler",value:function(e){e.preventDefault();var t=document.querySelector('[data-code="'.concat(e.code,'"]'));t&&t.classList.remove("press"),("ControlLeft"===e.code&&this.isAltLeft||"AltLeft"===e.code&&this.isControlLeft)&&(this.language="en"===this.language?"ru":"en",this.render.lang=this.language,this.saveLanguage(),this.keyboard.remove(),this.render.renderKeyboard(),this.keyboard=this.render.keyboard,this.keyboard.addEventListener("mousedown",this.mouseDownHandler.bind(this)),this.keyboard.addEventListener("mouseup",this.mouseUpHandler.bind(this)),this.keyboard.addEventListener("mouseout",this.mouseUpHandler.bind(this))),"AltLeft"===e.code&&(this.isAltLeft=!1),"ControlLeft"===e.code&&(this.isControlLeft=!1),"ControlLeft"!==e.code&&"AltLeft"!==e.code||(this.isAltCtrlClicked=!1),"ShiftLeft"===e.code&&(this.ShiftLeft=!1,this.shiftHandler()),"ShiftRight"===e.code&&(this.ShiftRight=!1,this.shiftHandler())}},{key:"keyPrint",value:function(e){var t;this.textArea.focus(),t=this.render.capsLock?this.render.isShift?null!==r[e][this.language].keyUp?r[e][this.language].keyUp:r[e][this.language].key:r[e][this.language].key.toUpperCase():this.render.isShift?null!==r[e][this.language].keyUp?r[e][this.language].keyUp:r[e][this.language].key.toUpperCase():r[e][this.language].key,"Tab"===e&&(t="\t"),"Enter"===e&&(t="\n");var i=this.textArea.selectionStart,n=this.textArea.value.slice(0,this.textArea.selectionStart),s=this.textArea.value.slice(this.textArea.selectionStart);this.textArea.value=n+t+s,this.textArea.selectionEnd=i+1}},{key:"doFunctionKey",value:function(e){if("Backspace"===e){var t=this.textArea.selectionStart,i=this.textArea.value.slice(0,this.textArea.selectionStart),n=this.textArea.value.slice(this.textArea.selectionStart);this.textArea.value=i.slice(0,i.length-1)+n,this.textArea.selectionEnd=t-1}if("Delete"===e){var r=this.textArea.selectionStart,s=this.textArea.value.slice(0,this.textArea.selectionStart),y=this.textArea.value.slice(this.textArea.selectionStart+1);this.textArea.value=s+y,this.textArea.selectionEnd=r}"CapsLock"===e&&(this.render.capsLock=!this.render.capsLock,this.keyboard.remove(),this.render.renderKeyboard(),this.keyboard=this.render.keyboard,this.keyboard.addEventListener("mousedown",this.mouseDownHandler.bind(this)),this.keyboard.addEventListener("mouseup",this.mouseUpHandler.bind(this)),this.keyboard.addEventListener("mouseout",this.mouseUpHandler.bind(this))),"AltLeft"===e&&(this.isAltLeft=!0),"ControlLeft"===e&&(this.isControlLeft=!0),"ShiftLeft"===e&&(this.ShiftLeft=!0,this.shiftHandler()),"ShiftRight"===e&&(this.ShiftRight=!0,this.shiftHandler())}},{key:"shiftHandler",value:function(){this.render.isShift=!this.render.isShift,this.keyboard.remove(),this.render.renderKeyboard(),this.keyboard=this.render.keyboard,this.keyboard.addEventListener("mousedown",this.mouseDownHandler.bind(this)),this.keyboard.addEventListener("mouseup",this.mouseUpHandler.bind(this)),this.keyboard.addEventListener("mouseout",this.mouseUpHandler.bind(this))}}])&&s(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}())).start()})();
//# sourceMappingURL=index.js.map