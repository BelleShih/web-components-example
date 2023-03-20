import MyButton from './my-button.js';
import MyButtonShadow from './my-button-shadow.js';
import MyButtonConnected from './my-button-connected.js';
import MyButtonTemplate from './my-button-template.js';

// 要用 define 註冊元件才能使用
window.customElements.define('my-button', MyButton);
window.customElements.define('my-button-shadow', MyButtonShadow);
window.customElements.define('my-button-connected', MyButtonConnected);
window.customElements.define('my-button-template', MyButtonTemplate);



