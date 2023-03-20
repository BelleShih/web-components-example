export default class MyButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    const template = document.createElement('template');
    template.innerHTML = `
      <button>
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <slot name="text"></slot>
      </button>
    `;

    const button = document.createElement('button');
    button.innerHTML = 'My button';

    const style = document.createElement('style');
    style.textContent = `
      .icon {
        width: 24px;
        height: 24px;
      }
      ::slotted(img) {
        width: 100%;
        height: 100%;
      }
    `;

    this.shadowRoot.append(style, template.content.cloneNode(true));
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
