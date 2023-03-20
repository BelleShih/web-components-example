export default class MyButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    const button = document.createElement('button');
    button.innerHTML = 'My button';

    const style = document.createElement('style');
    style.textContent = `
      button {
        background: blue;
        color: white;
      }
    `;

    this.shadowRoot.append(style, button);
  }
}
