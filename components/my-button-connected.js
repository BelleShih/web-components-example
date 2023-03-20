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
        background: yellow;
        color: black;
      }
    `;

    this.shadowRoot.append(style, button);
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    window.alert('my-button-connected!');
  }
}
